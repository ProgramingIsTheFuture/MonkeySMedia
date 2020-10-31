from django.urls import path, include

from .views import (
    list_posts_view,
    create_posts_view,
    like_unlike_posts_view,
    check_like_posts_view,
    delete_post_view,
    get_user_posts_view,
    SearchList,
)

urlpatterns = [
    path('list-posts/', list_posts_view),
    path('get-user-posts/', get_user_posts_view),
    path('create-posts/', create_posts_view),
    path('delete-post/', delete_post_view),
    path('like-unlike-posts/', like_unlike_posts_view),
    path('check-like-post/', check_like_posts_view),
    path('search-user-post', SearchList.as_view()),
]
