from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from StorieSMedia.models import Stories 
from StorieSMedia.serializers import StoriesSerializer
from ProfileSMedia.models import ProfileUser

import datetime
from django.utils import timezone



@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def post_stories(request):
    serializers = StoriesSerializer(data=request.data)
    if serializers.is_valid(raise_exception=True):
        serializers.expiration_date = expiration_date=timezone.now() + datetime.timedelta(days=1)
        serializers.save(user=request.user)
        return Response(serializers.data, 201)
    return Response(serializers.errors, 400)


@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def list_all_stories(request):
    stories = Stories.objects.all().filter(expiration_date__gt=timezone.now())
    profile = ProfileUser.objects.get(id=request.user.id)
    finalRes = []
    for storie in stories:
        print(storie)
        if storie.user in profile.following.all() or storie.user == request.user:
            finalRes.append(storie)

    serializers = StoriesSerializer(finalRes, many=True)
    return Response(serializers.data, 200)

