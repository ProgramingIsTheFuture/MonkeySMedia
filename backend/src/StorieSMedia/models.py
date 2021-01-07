from django.db import models
from django.contrib.auth.models import User


def upload_path(instance, filename):
    return ''.join(['stories_images/', str(instance), filename])


class Stories(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.FileField(upload_to=upload_path)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.image.name}"
