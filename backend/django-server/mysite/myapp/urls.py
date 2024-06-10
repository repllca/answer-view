from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("", views.api_root),
    path("kadai/<int:pk>/highlight/", views.KadaiThreadHighlight.as_view(), name="Thread-highlight"),
    path("kadai/",views.KadaiThreadListAPIView.as_view(),name="List"),
    path("kadai/<int:pk>/comments/",views.KadaiThreadDetailAPIView.as_view(),name="Detail"),
]

