from channels.consumer import AsyncConsumer
from channels.db import database_sync_to_async
from asgiref.sync import sync_to_async
from django.contrib.auth.models import User
from .models import Message

import json

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

