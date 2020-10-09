from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate, login

from Users.serializers import UserCreationSerializer

# Register / Login a user


class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication,)
    queryset = User.objects.all()
    serializer_class = UserCreationSerializer

# Get the current user (using the application)


@api_view(["POST", "GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_username(request):
    id = request.user.id
    obj = get_object_or_404(User, id=id)
    if obj:
        return Response({"username": obj.username}, status=status.HTTP_200_OK)

    return Response({"Fatal": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["POST", "GET"])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    print(username, password)
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response({"You're in! Have Fun!"}, status=status.HTTP_200_OK)
    else:
        return Response({"Something went wrong"}, status=status.HTTP_401_UNAUTHORIZED)
