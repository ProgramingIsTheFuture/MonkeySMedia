from django.db import models
from django.contrib.auth.models import User



class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title= models.CharField(max_length=150, blank=True, null=True)
    content = models.TextField(max_length=550, blank=True, null=False)
    image = models.FileField(upload_to='img', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.title
