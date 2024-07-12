from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path("myapp/",include("myapp.urls")),#myapp
    path("auth/", include("djoser.urls")),
    path("auth/",include("djoser.urls.jwt")),
]
