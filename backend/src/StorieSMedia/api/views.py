from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from StorieSMedia.models import Stories 
from StorieSMedia.serializers import StoriesSerializer


@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def post_stories(request):
    serializers = StoriesSerializer(data=request.data)
    print(request.user)
    if serializers.is_valid(raise_exception=True):
        serializers.save(user=request.user)
        return Response(serializers.data, 200)
    return Response(serializers.errors, 400)
