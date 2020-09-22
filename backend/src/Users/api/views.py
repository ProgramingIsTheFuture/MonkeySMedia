from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view

from Users.serializers import UserCreationSerializer

class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication,)
    queryset = User.objects.all()
    serializer_class = UserCreationSerializer
