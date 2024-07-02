from django.urls import path,include
from .views import TitleListAPIView, KadaiCreateAPIView, KadaiDetailAPIView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r"kadai",KadaiCreateAPIView)

urlpatterns = [
    path("kadai/list/",TitleListAPIView.as_view(),name="Kadai-List"),
    path("kadai/<int:pk>/detail/",KadaiDetailAPIView.as_view(),name="Kadai-Detail"),
    path("",include(router.urls)),
]
