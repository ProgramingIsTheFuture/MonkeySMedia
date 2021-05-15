from django.urls import path

from . import views

urlpatterns = [
        path('all-messages/', views.get_all_messages),
        path('list-users/', views.get_all_users_messages)
]
