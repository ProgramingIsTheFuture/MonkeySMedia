from rest_framework import serializers

from .models import Post
from ProfileSMedia.models import ProfileUser


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    timestamp = serializers.DateTimeField(
        format="%H - %d/%m/%Y", required=False)
    profile_image = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content', 'image',
                  'profile_image', 'likes', 'timestamp')

    def get_user(self, obj):
        return obj.user.username

    def get_profile_image(self, obj):
        id = obj.user.id
        image = ProfileUser.objects.get(id=id)
        profile_image = image.profile_image
        return '/media/' + str(profile_image)

    def get_likes(self, obj):
        return obj.likes.count()
