from django.urls import path

from . import views

urlpatterns = [
        path('post-storie/', views.post_stories)
]
