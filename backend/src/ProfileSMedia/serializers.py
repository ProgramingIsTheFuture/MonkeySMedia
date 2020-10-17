from rest_framework import serializers
from .models import ProfileUser


class ProfileUserSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()
    followers = serializers.SerializerMethodField()

    class Meta:
        model = ProfileUser
        fields = ('user', 'first_name', 'last_name', 'profile_image',
                  'background_profile_image', 'description', 'following', 'followers', 'timestamp')

    def get_user(self, obj):
        return obj.user.username

    def get_following(self, obj):
        return obj.following.count()

    def get_followers(self, obj):
        return obj.followers.count()

    def get_first_name(self, obj):
        return obj.user.first_name

    def get_last_name(self, obj):
        return obj.user.last_name
