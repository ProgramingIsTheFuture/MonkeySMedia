from rest_framework import serializers

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(source="user.username", read_only=True)
    timestamp = serializers.DateTimeField(format="%H:%M:%S %d-%m-%Y")

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content', 'timestamp')