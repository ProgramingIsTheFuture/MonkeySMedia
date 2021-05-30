from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.authentication import TokenAuthentication
from StorieSMedia.models import Stories, UserStories
from StorieSMedia.serializers import StoriesSerializer, UserStoriesSerializer
from ProfileSMedia.models import ProfileUser

import datetime
from django.utils import timezone



@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def post_stories(request):
    stories_serializers = StoriesSerializer(data=request.data)
    if stories_serializers.is_valid(raise_exception=True):
        storie = stories_serializers.save()
        userStories = UserStories.objects.get(user=request.user)
        userStories.stories.add(Stories.objects.get(id=storie.id))
        serializers = UserStoriesSerializer(userStories)

        return Response(serializers.data, 201)

    return Response(stories_serializers.errors, 400)


@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication, BasicAuthentication])
def list_all_stories(request):
    
    profiles = ProfileUser.objects.get(id=request.user.id)
    finalRes = []
    me_stories = UserStories.objects.get(id=request.user.id)
    if me_stories.stories.all():
        print(me_stories.stories.all())
        finalRes.append(me_stories)

    for profile in profiles.following.all():
        print(profile.__dict__)
        user_stories = UserStories.objects.get(id=profile.id)
        user_stories.stories = user_stories.filter(expiration_date__gt=timezone.now())
        finalRes.append(user_stories)

    serializers = UserStoriesSerializer(finalRes, many=True)
    return Response(serializers.data, 200)

