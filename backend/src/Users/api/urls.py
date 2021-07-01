from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from .views import UserViewSet, change_password, get_username, login_view, logout_view

router = routers.DefaultRouter()
router.register('', UserViewSet)

urlpatterns = [
    path('create/', include(router.urls)),
    path('change-password/', change_password),
    path('get-user/', get_username),
    path('login/', login_view),
    path('logout/', logout_view)
]
