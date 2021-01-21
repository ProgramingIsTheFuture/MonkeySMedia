from django.db import models

from django.contrib.auth.models import User


def upload_path(instance, filename):
    return ''.join(['message/', str(instance.title), filename])


class Group(models.Model):
    user_owner = models.ForeignKey(User, related_name="owner", on_delete=models.CASCADE)
    members = models.ManyToManyField(User, related_name="members")

    def __str__(self):
        return self.pk


class Message(models.Model):
    user_sender = models.ForeignKey(User, related_name="who_send", on_delete=models.CASCADE)
    user_receiver = models.ForeignKey(User, related_name="who_receive", on_delete=models.CASCADE)
    content = models.TextField(max_length=1050, blank=True, null=False)
    image = models.FileField(upload_to=upload_path, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.contet
