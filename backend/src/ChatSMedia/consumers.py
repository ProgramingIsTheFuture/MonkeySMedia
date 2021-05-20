from channels.consumer import AsyncConsumer
from channels.generic.websocket import WebsocketConsumer
from channels.layers import get_channel_layer
from channels.db import database_sync_to_async
from asgiref.sync import sync_to_async, async_to_sync

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Message, Notification
from ProfileSMedia.serializers import ProfileUserSerializer
from ProfileSMedia.models import ProfileUser

import time
import json

class ChatNotificationConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        print("Connected")

        self.me = self.scope['user']
        async_to_sync(self.channel_layer.group_add)(self.me.username, self.channel_name)


    def disconnect(self, close_code):
        pass

    def chat_message(self, event):
        self.send(text_data=event["data"])


@receiver(post_save, sender=Message)
def notification(sender, instance, created, **kwargs):
    Notification(user=instance.receiver.id,
            sender=instance.sender.id,
            message=f"Nova Mensage de {instance.sender.username}").save()


@receiver(post_save, sender=Notification)
def notification(sender, instance, created, **kwargs):
    channel_layer = get_channel_layer()
    data = {}
    data['message'] = instance.message
    data['profile'] = ProfileUserSerializer(ProfileUser.objects.get(pk=instance.sender.id)).data

    async_to_sync(channel_layer.group_send)(User.objects.get(pk=instance.user.id).username, {
        "type": "chat_message",
        "data": json.dumps(data),
    })

class ChatConsumer(AsyncConsumer):

    @sync_to_async
    def getThreadName(self, names: [str]) -> str:
        names.sort()

        finalResult = ""
        if names[0].__len__() >= names[1].__len__():
            finalResult = f"{names[0]}{names[1]}"
        else:
            finalResult = f"{names[1]}{names[0]}"

        return finalResult

    @database_sync_to_async
    def store_message(self, message):
        Message.objects.create(
            receiver = self.other_user,
            sender = self.scope['user'],
            message = message
        )    

    async def websocket_connect(self, event):
        self.me = self.scope['user']
        other_username = self.scope['url_route']['kwargs']['username']
        self.other_user = await sync_to_async(User.objects.get)(username=other_username)
        self.thread_obj = await self.getThreadName([self.me.username, self.other_user.username])
        self.room_name = f'presonal_thread_{self.thread_obj}'
        await self.channel_layer.group_add(self.room_name, self.channel_name)
        await self.send({
            'type': 'websocket.accept'
        })
        print(f'[{self.channel_name}] - You are connected')

    async def websocket_receive(self, event):
        print(f'[{self.channel_name}] - Recieved message - {event["text"]}')

        msg = json.dumps({
            'text': event.get('text'),
            'username': self.scope['user'].username
        })

        await self.store_message(event.get('text'))

        await self.channel_layer.group_send(
            self.room_name,
             {
                'type': 'websocket.message',
                'text': msg
             }
        )


    async def websocket_message(self, event):
        print(f'[{self.channel_name}] - Message sent - {event["text"]}')
        await self.send({
            'type': 'websocket.send',
            'text': event.get('text')
        })
    
    async def websocket_disconnect(self, event):
        await self.channel_layer.group_discard(self.room_name, self.channel_name)

