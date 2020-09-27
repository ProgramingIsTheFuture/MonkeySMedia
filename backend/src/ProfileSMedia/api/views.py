from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import  TokenAuthentication
from ProfileSMedia.models import ProfileUser
from ProfileSMedia.serializers import ProfileUserSerializer

@api_view(["GET", "POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_my_profile(request):
    username = request.data.get("username")
    user = get_object_or_404(User, username=username)
    obj = get_object_or_404(ProfileUser, user=user)
    serializer = ProfileUserSerializer(obj)
    return Response(serializer.data, status=status.HTTP_200_OK)
