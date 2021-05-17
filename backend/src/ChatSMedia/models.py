from django.db import models


class Message(models.Model):
    sender = models.ForeignKey('auth.User', related_name="sender", on_delete=models.CASCADE)
    receiver = models.ForeignKey('auth.User', related_name="receiver", on_delete=models.CASCADE)
    message = models.TextField(blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'From <Thread - {self.message}>'

    class Meta:
        ordering = ["id"]


class Notification(models.Model):
    user = models.ForeignKey('auth.User', related_name="receiver", on_delete=models.CASCADE)
    sender_username = models.TextField(blank=False, null=False)
    message = models.TextField(blank=False, null=False)
    is_read = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'Sender {self.sender_username}'

    class Meta:
        ordering = ["-id"]
