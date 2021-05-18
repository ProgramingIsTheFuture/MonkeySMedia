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

class NotificationSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    sender = serializers.SerializerMethodField()
    is_read = serializers.BooleanField(required=True)
    timestamp = serializers.DateTimeField(
        format="%H - %d/%m/%Y", required=False)

    class Meta:
        model = Message
        fields = ('id', 'user', 'sender', "message", "is_read", "timestamp")

    def get_user(self, obj):
        return obj.user.username

    def get_sender(self, obj):
        return obj.user.username