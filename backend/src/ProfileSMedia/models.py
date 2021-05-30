import random
from django.db import models
from django.db.models.signals import post_save

from django.contrib.auth.models import User
from StorieSMedia.models import UserStories


def upload_path(instance, filename):
    return ''.join(['profile_img/', str(instance), filename])


def upload_path_background(instance, filename):
    return ''.join(['profile_background_image/', str(instance), filename])


class FollowRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey("ProfileUser", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

def randomImg():
    return  random.randint(1, 2)

class ProfileUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.FileField(
        upload_to=upload_path, default=f'default/face_img/{randomImg()}.svg')

    background_profile_image = models.FileField(
        upload_to=upload_path_background, default=f'default/background_img/background_img.png')
    
    description = models.TextField(
        max_length=150, default='', blank=False, null=False)
    
    timestamp = models.DateField(auto_now_add=True)
    
    following = models.ManyToManyField(
        User, related_name="following", blank=True)
    
    followers = models.ManyToManyField(
        User, related_name="follower", blank=True, through=FollowRelation)

    def __str__(self):
        return self.user.username


def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        ProfileUser.objects.get_or_create(user=instance)
        UserStories.objects.get_or_create(user=instance)


post_save.connect(user_did_save, sender=User)
