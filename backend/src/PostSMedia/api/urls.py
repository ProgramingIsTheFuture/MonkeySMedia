from django.urls import path

from .views import (list_posts_view, create_posts_view)

urlpatterns = [
    path('list-posts/', list_posts_view),
    path('create-posts/', create_posts_view),
]
