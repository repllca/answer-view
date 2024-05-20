
from django.urls import path
from rest_framework import routers
from . import views
from .views import KadaiAPIView
router = routers.DefaultRouter()
router.register(r'device', KadaiAPIView)
urlpatterns = [
    path("", views.index, name="index"),
]