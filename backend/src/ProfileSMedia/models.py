from django.db import models
from django.db.models.signals import post_save

from django.contrib.auth.models import User

def upload_path(instance, filename):
    return ''.join(['profile', str(instance), filename])

class FollowRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    followers = models.ManyToManyField(User, related_name="followers", blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

class ProfileUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.FileField(upload_to=upload_path, default='default/MonkeySMediaSystem.png')
    description = models.TextField(max_length=150, default='', blank=False, null=False)
    timestamp = models.DateField(auto_now_add=True)
    following = models.ManyToManyField(User, related_name="following", blank=True)

    def __str__(self):
        return self.user.username

def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        ProfileUser.objects.get_or_create(user=instance)

post_save.connect(user_did_save, sender=User)