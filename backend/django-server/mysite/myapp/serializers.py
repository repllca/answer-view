from rest_framework import serializers
from .models import Kadai, Thread
from django.contrib.auth.models import User

class KadaiSerializer(serializers.ModelSerializer):
    """
    kadaimodelのapi用シリアライザ
    ownerは読み取り専用でowner.usernameから取得
    """
    owner = serializers.ReadOnlyField(source="owner.username")
    class Meta:
        model = Kadai
        fields = ["answer","description","created_at","owner"]

class ThreadListSerializer(serializers.ModelSerializer):
    """
    Threadlistのapi用シリアライザ
    """
    class Meta:
        model = Thread
        fields = ["title"]

# class UserSerializer(serializers.ModelSerializer):
#     kadai = serializers.PrimaryKeyRelatedField(many=True,queryset=Kadai.objects.all())

#     class Meta:
#         model = User
#         fields = ('username', 'email', 'password')
    