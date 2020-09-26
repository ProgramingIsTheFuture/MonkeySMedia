from rest_framework import serializers
from .models import ProfileUser

class ProfileUserSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
        
    class Meta:
        model = ProfileUser
        fields = ('user', 'profile_image', 'description', 'timestamp')

    def get_user(self, obj):
        return obj.user.username