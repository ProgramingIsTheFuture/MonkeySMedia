from rest_framework import serializers
from .models import Message

class MessageSerializer(serializers.ModelSerializer):
    user_receiver = serializers.SerializerMethodField()
    user_sender = serializers.SerializerMethodField()
    timestamp = serializers.DateTimeField(
        format="%H - %d/%m/%Y", required=False)

    class Meta:
        model = Message
        fields = ('id', 'user_receiver', 'user_sender', 'message', "timestamp")

    def get_user_receiver(self, obj):
        return obj.receiver.username

    def get_user_sender(self, obj):
        return obj.sender.username
