from django.urls import path,include
from . import views

urlpatterns = [
    path("kadai/",views.KadaiListAPIView.as_view(),name="List"),
    path("kadai/<int:pk>/",views.KadaiDetailAPIView.as_view(),name="Detail"),
]