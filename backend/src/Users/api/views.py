from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import  TokenAuthentication
from django.shortcuts import get_object_or_404

from Users.serializers import UserCreationSerializer

class UserViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication,)
    queryset = User.objects.all()
    serializer_class = UserCreationSerializer

@api_view(["POST", "GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_username(request):
    id = request.user.id
    obj = get_object_or_404(User, id=id)
    if obj:
        return Response({"username": obj.username}, status=status.HTTP_200_OK)

    return Response({"Fatal": "User does not exist"}, status=status.HTTP_404_NOT_FOUND)