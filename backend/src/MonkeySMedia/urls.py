"""MonkeySMedia URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.remove_this),
    path('api/posts/', include('PostSMedia.api.urls')),
    path('api/users/', include('Users.api.urls')),
    path('api/profile/', include('ProfileSMedia.api.urls')),
    path('auth/', obtain_auth_token),
]

if settings.DEBUG:
    media_url = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += media_url
