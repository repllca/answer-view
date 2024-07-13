from django.urls import path,include,re_path
from . import views 
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path("kadai/list/",views.TitleListAPIView.as_view()),
    path("kadai/list/<int:pk>/detail/",views.KadaiDetailAPIView.as_view()),
    path("kadai/list/create/",views.KadaiCreateAPIView.as_view()),
    path("kadai/user/list/",views.UserKadaiListAPIView.as_view()),
    path("kadai/user/<int:pk>/edit/",views.UserKadaiEditAPIView.as_view()),
]
