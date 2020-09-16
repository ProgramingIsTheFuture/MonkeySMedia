from django.urls import path, include

from .views import (
    list_posts_view, 
    create_posts_view, 
    like_posts_view, 
    unlike_posts_view
)

urlpatterns = [
    path('list-posts/', list_posts_view),
    path('create-posts/', create_posts_view),
    path('like-posts/', like_posts_view),
    path('unlike-posts/', unlike_posts_view),
]
