from rest_framework import serializers

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    timestamp = serializers.DateTimeField(format="%H:%M:%S %d-%m-%Y", required=False)
    likes = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content',  'likes', 'timestamp')

    def get_user(self, obj):
        return obj.user.username

    def get_likes(self, obj):
        return obj.likes.count()
