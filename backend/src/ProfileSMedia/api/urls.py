from django.urls import path

from . import views

urlpatterns = [
    path('get-me/', views.get_profile_by_username)
]