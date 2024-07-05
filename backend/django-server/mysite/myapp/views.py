from rest_framework import viewsets, generics, status, permissions, filters
from rest_framework.exceptions import NotAuthenticated
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
    search_fields = ["title", "date", "id","owner__username"]

class KadaiCreateAPIView(generics.CreateAPIView):
    """
    動作:kadaiの作成を行う
    permission:ログインユーザー
    """
    queryset = Kadai.objects.all().order_by("-date")
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class KadaiDetailAPIView(generics.RetrieveAPIView):
    """
    動作:titleの詳細表示を行う
    permission:ログインユーザ
    """
    queryset = Kadai.objects.all().order_by("-date")
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserKadaiListAPIView(generics.ListAPIView):
    """
    動作:request.userが作成したkadai一覧を表示 permission:ログインユーザかつrequest.userが作成したkadaiだけ """
    serializer_class = TitleListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_anonymous:
            raise NotAuthenticated("ユーザーが認証されていません。")
        return Kadai.objects.filter(owner=user)

class UserKadaiEditAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    動作:request.userが作成したkadaiの編集を行う(update,delete,create)
    permission:ログインユーザかつrequest.userが作成したkadaiだけ 
    """
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        return Kadai.objects.filter(owner=user)    