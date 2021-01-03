from django.db import models
from django.contrib.auth.models import User

class Stories(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # image = models.FileField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
