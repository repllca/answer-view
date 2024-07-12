from django.urls import path,include, re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from . import views

urlpatterns = [
    path("register/", views.CustomUserCreateView.as_view(), name="register"),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("logout/", views.LogoutView.as_view(), name="logout"),
    path("detail/", views.DetailView.as_view(), name="detail"),
]
