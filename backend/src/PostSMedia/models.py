from django.db import models
from django.contrib.auth.models import User

class LikesPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey("Post", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title= models.CharField(max_length=300, blank=True, null=True)
    content = models.TextField(max_length=1050, blank=True, null=False)
    image = models.FileField(upload_to='img', blank=True, null=True)
    likes = models.ManyToManyField(User, related_name="Likes", blank=True, through=LikesPost)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.title
