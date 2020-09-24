from django.urls import path, include

from .views import (
    list_posts_view, 
    create_posts_view, 
    like_unlike_posts_view,
)

urlpatterns = [
    path('list-posts/', list_posts_view),
    path('create-posts/', create_posts_view),
    path('like-unlike-posts/', like_unlike_posts_view),
]
