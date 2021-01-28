from django.urls import path

from . import views

urlpatterns = [
    path('get-profile/', views.get_profile_by_username),
    path('search-profile', views.SearchList.as_view()),
    path('follow-unfollow/', views.post_Following_or_UnFollowing),
    path('check-follow-profile/', views.check_follow_profile_view),
    path('edit-my-profile/', views.edit_profile_view),
    path('list-all-users-following/', views.list_all_following_people)
]
