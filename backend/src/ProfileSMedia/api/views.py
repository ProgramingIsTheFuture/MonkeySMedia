from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework import filters
from ProfileSMedia.models import ProfileUser
from ProfileSMedia.serializers import ProfileUserSerializer


# get Profile using the username
@api_view(["GET", "POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def get_profile_by_username(request):
    username = request.data.get("username")
    user = get_object_or_404(User, username=username)
    obj = get_object_or_404(ProfileUser, user=user)
    serializer = ProfileUserSerializer(obj)
    return Response(serializer.data, status=status.HTTP_200_OK)


# search-profile?search= and then just type the username :)
class SearchList(generics.ListAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['user__username']
