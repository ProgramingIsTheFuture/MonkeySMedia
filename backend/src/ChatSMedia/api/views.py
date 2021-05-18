from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from ChatSMedia.models import Message, Notification
from ChatSMedia.serializers import MessageSerializer, NotificationSerializer

from ProfileSMedia.models import ProfileUser
from ProfileSMedia.serializers import ProfileUserSerializer


# get messages between "me" and the other user
@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_all_messages(request):
    other_username = request.data.get("username")
    other_user = get_object_or_404(User, username=other_username)

    finalRes = []
    for i in Message.objects.all():
        if i.sender == request.user and i.receiver == other_user:
            finalRes.append(i)
        elif i.receiver == request.user and i.sender == other_user: 
            finalRes.append(i)

    serializer = MessageSerializer(finalRes, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_all_users_messages(request):
    msgUsers = []
    for i in Message.objects.all():
        if i.sender == request.user:
            if ProfileUser.objects.get(pk=i.receiver.id) in msgUsers:
                continue
            msgUsers.append(ProfileUser.objects.get(pk=i.receiver.id))
        elif i.receiver == request.user:
            if ProfileUser.objects.get(pk=i.sender.id) in msgUsers:
                continue
            msgUsers.append(ProfileUser.objects.get(pk=i.sender.id))

    following = get_object_or_404(ProfileUser, user_id=request.user.id)

    profiles = []
    for user in following.following.all():
        profiles.append(get_object_or_404(ProfileUser, user_id=user.id))

    finalRes = []
    finalRes.extend(msgUsers[:])
    finalRes.extend(profiles[:])

    serializer = ProfileUserSerializer(set(finalRes), many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_all_noti(request):
    noti = Notification.objects.all().filter(user=request.user)
    serializer = NotificationSerializer(noti, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_mark_as_read(request):
    noti = Notification.objects.all().filter(user=request.user)

    for notification in noti:
        notification.is_read = True
        notification.save()

    serializer = NotificationSerializer(noti, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
