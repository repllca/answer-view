from django.urls import path,include
from . import views 
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("kadai/list/",views.TitleListAPIView.as_view(),name="Kadai-List"),
    path("kadai/<int:pk>/detail/",views.KadaiDetailAPIView.as_view(),name="Kadai-Detail"),
    path("kadai/<int:pk>/create/",views.KadaiCreateAPIView.as_view()),
    path("kadai/user/list/",views.UserKadaiListAPIView.as_view()),
    path("kadai/user/<int:pk>/edit/",views.UserKadaiEditAPIView.as_view()),
]
