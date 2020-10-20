from django.db import models
from django.contrib.auth.models import User
from django.db.models import Q

def upload_path(instance, filename):
    return ''.join(['posts', str(instance.title), filename])

class LikesPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey("Post", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

# class PostQuerySet(models.QuerySet):
#     def by_username(self, username):
#         return self.filter(user__username__iexact=username)

#     def feed(self, user):
#         profiles_exist = user.following.exists()
#         followed_users_id = []
#         if profiles_exist:
#             followed_users_id = user.following.values_list("user__id", flat=True)
#         return self.filter(
#             Q(user__id__in=followed_users_id) |
#             Q(user=user)
#         ).distinct().order_by("-timestamp")

# class PostManager(models.Manager):
#     def get_queryset(self, *args, **kwargs):
#         return PostQuerySet(self.model, using=self._db)

#     def feed(self, user):
#         return self.get_queryset().feed(user)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=300, blank=False, null=False)
    content = models.TextField(max_length=1050, blank=True, null=False)
    image = models.FileField(upload_to=upload_path, blank=True, null=True)
    likes = models.ManyToManyField(User, related_name="Likes", blank=True, through=LikesPost)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.title
