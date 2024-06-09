from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("kadai/",views.ThreadListAPIView.as_view(),name="List"),
    path("kadai/<int:pk>/comments/",views.KadaiDetailAPIView.as_view(),name="Detail"),
]

