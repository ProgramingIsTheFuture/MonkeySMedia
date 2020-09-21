from django.db import models
from django.db.models.signals import post_save

from django.contrib.auth.models import User

class ProfileUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.FileField(upload_to='profile-%d-%m-%Y', default='default/MonkeySMediaSystem.png')

    def __str__(self):
        return self.user.username

def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        ProfileUser.objects.get_or_create(user=instance)

post_save.connect(user_did_save, sender=User)