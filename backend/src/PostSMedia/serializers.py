from rest_framework import serializers

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    timestamp = serializers.DateTimeField(format="%H:%M:%S %d-%m-%Y", required=False)

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content', 'timestamp')

    def get_user(self, obj):
        return obj.user.username