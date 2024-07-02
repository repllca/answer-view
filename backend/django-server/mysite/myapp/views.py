from rest_framework import viewsets, generics, status, permissions, filters
from .models import Kadai
from .serializers import KadaiSerializer, TitleListSerializer
from .permissions import IsOwnerOrReadOnly

class TitleListAPIView(generics.ListAPIView):
    """
    動作:保存されているリストを表示
    permission:誰でも
    """
    queryset = Kadai.objects.all().order_by("-date")
    serializer_class = TitleListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["title", "owner", "date"]

class KadaiCreateAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    動作:kadaiの作成を行う
    permission:ログインユーザーだけ作成可能
    """
    queryset = Kadai.objects.all().order_by("-date")
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class KadaiDetailAPIView(generics.RetrieveAPIView):
    """
    動作:titleの詳細表示を行う
    permission:ログインユーザだけ,編集が可能
    """
    queryset = Kadai.objects.all().order_by("-date")
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticated]
