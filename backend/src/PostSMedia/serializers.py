from rest_framework import serializers

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(source="user.username", read_only=True)
    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content', 'timestamp')