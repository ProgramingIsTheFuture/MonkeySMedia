from rest_framework import serializers
from .models import Stories 


class StoriesSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()


    class Meta:
        model = Stories 
        fields = ('id', 'user', 'timestamp')

    def get_user(self, obj):
        return obj.user.username



