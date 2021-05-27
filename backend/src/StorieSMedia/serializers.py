from rest_framework import serializers
from .models import Stories 

from ProfileSMedia.models import ProfileUser
from ProfileSMedia.serializers import ProfileUserSerializer


class StoriesSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Stories 
        fields = ('id', 'user', 'image',  'expiration_date', 'timestamp')

    def get_user(self, obj):
        profile = ProfileUser.objects.get(id=obj.user.id)
        serializers = ProfileUserSerializer(profile, many=False)
        return serializers.data


