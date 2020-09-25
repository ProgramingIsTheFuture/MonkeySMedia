from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from .views import UserViewSet, get_username

router = routers.DefaultRouter()
router.register('', UserViewSet)

urlpatterns = [
    path('create/', include(router.urls)),
    path('get-user/', get_username),
]
