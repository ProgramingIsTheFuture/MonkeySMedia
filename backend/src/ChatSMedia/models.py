from django.db import models


class Message(models.Model):
    sender = models.ForeignKey('auth.User', related_name="sender", on_delete=models.CASCADE)
    receiver = models.ForeignKey('auth.User', related_name="receiver", on_delete=models.CASCADE)
    message = models.TextField(blank=False, null=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'From <Thread - {self.message}>'

    class Meta:
        ordering = ["-id"]
