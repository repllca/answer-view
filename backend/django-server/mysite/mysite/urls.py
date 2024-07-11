from django.contrib import admin
from django.urls import path, include, re_path
from accounts.views import CustomTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path("auth/jwt/create/",CustomTokenObtainPairView.as_view(), name="custom_jwt_create"),
    path("myapp/",include("myapp.urls")),#myapp
    path("auth/", include("djoser.urls")),
    path("auth/",include("djoser.urls.jwt")),
]
