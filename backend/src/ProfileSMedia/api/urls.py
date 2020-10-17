from django.urls import path

from . import views

urlpatterns = [
    path('get-me/', views.get_profile_by_username),
    path('search-profile', views.SearchList.as_view()),
    path('follow-unfollow/', views.post_Following_or_UnFollowing)
]