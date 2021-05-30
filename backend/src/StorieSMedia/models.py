from django.db import models
from django.contrib.auth.models import User

import datetime
from django.utils import timezone

def upload_path(instance, filename):
    return ''.join(['stories_images/', str(instance), filename])

def defaultTime():
    return timezone.now() + datetime.timedelta(days=1)


class Stories(models.Model):
    image = models.FileField(upload_to=upload_path)
    timestamp = models.DateTimeField(auto_now_add=True)
    expiration_date = models.DateTimeField(default=defaultTime)
    
    def __str__(self):
        return f"Storie"

class UserStories(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    stories = models.ManyToManyField(Stories)

    def __str__(self):
        return f"{self.user}"


