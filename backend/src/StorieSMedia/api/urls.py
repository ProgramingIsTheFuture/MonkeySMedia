from django.urls import path

from . import views

urlpatterns = [
        path('post-storie/', views.post_stories),
        path('list-stories/', views.list_all_stories)
]
