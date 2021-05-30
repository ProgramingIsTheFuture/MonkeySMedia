from rest_framework import serializers
from .models import Stories, UserStories 

from ProfileSMedia.models import ProfileUser
from ProfileSMedia.serializers import ProfileUserSerializer


class StoriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stories 
        fields = ('id', 'image', 'timestamp')


class UserStoriesSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    stories = serializers.SerializerMethodField()

    class Meta:
        model = UserStories 
        fields = ('id', 'user', 'stories')

    def get_user(self, obj):
        profile = ProfileUser.objects.get(id=obj.user.id)
        serializers = ProfileUserSerializer(profile, many=False)
        return serializers.data

    def get_stories(self, obj):
        stories = obj.stories.all()

        serializer = StoriesSerializer(stories, many=True)
        return serializer.data


