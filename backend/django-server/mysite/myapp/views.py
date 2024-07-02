from rest_framework import viewsets, generics,status, permissions, serializers
from rest_framework.response import Response
from .models import Kadai
from .serializers import KadaiSerializer, TitleListSerializer
from .permissions import IsOwnerOrReadOnly

class TitleListAPIView(generics.ListAPIView):
    """
    動作:保存されているリストを表示
    permission:誰でも
    Threadの削除はadminuserが行うべき
    """
    queryset = Kadai.objects.all().order_by("-created_at")
    serializer_class = TitleListSerializer

class KadaiCreateAPIView(viewsets.ModelViewSet):
    """
    動作:kadaiの作成を行う
    permission:ログインユーザーだけ作成可能
    """
    queryset = Kadai.objects.all().order_by("-created_at")
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class KadaiDetailAPIView(generics.RetrieveAPIView):
    """
    動作:titleの詳細表示を行う
    permission:ログインユーザだけ
    """
    queryset = Kadai.objects.all().order_by("-created_at")
    serializer_class = KadaiSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# class KadaiThreadDetailAPIView(generics.ListCreateAPIView):
#     """
#     認証されたuserなら書き込みと、読み込みを許可する、それ以外なら読み込みを許可
#     課題:putを使用
#     """
#     queryset = Kadai.objects.all().order_by("-created_at")
#     serializer_class = KadaiSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

#     def list(self, request, *args, **kwargs):
#         pk = self.kwargs.get("pk")
#         if pk:
#             try:
#                 thread = Kadai.objects.get(pk=pk)
#                 kadai_queryset = Kadai.objects.filter(thread=thread).order_by("-created_at")
#                 kadai_serializer = KadaiSerializer(kadai_queryset, many=True)
#                 thread_serializer = TitleListSerializer(thread)
#                 return Response({
#                     'thread': thread_serializer.data,
#                     'kadai': kadai_serializer.data,
#                 })
#             except Thread.DoesNotExist:
#                 return Response({
#                     'thread': None,
#                     'kadai': [],
#                 }, status=status.HTTP_404_NOT_FOUND)
#         return super().list(request, *args, **kwargs)

#     def create(self, request, *args, **kwargs):
#             serializer = self.get_serializer(data=request.data)
#             serializer.is_valid(raise_exception=True)
#             self.perform_create(serializer)
#             headers = self.get_success_headers(serializer.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

#     def perform_create(self, serializer):
#         pk = self.kwargs.get("pk")
#         if pk:
#             try:
#                 thread = Thread.objects.get(pk=pk)
#                 serializer.save(owner=self.request.user, thread=thread)
#             except Thread.DoesNotExist:
#                 raise serializers.ValidationError("Thread does not exist.")
