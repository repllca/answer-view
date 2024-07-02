from rest_framework import serializers
from .models import Kadai
from django.contrib.auth.models import User

class TitleListSerializer(serializers.ModelSerializer):
    """
    title一覧のapiシリアライザ
    """
    owner = serializers.ReadOnlyField(source="owner.username")
    class Meta:
        model = Kadai
        fields = ["title", "owner", "date", "id"]
class KadaiSerializer(serializers.ModelSerializer):
    """
    kadaimodelのapi用シリアライザ
    ownerは読み取り専用でowner.usernameから取得
    """
    owner = serializers.ReadOnlyField(source="owner.username")
    class Meta:
        model = Kadai
        fields = ["title", "answer","description","date","owner"]


# class UserSerializer(serializers.ModelSerializer):
#     kadai = serializers.PrimaryKeyRelatedField(many=True,queryset=Kadai.objects.all())

#     class Meta:
#         model = User
#         fields = ('username', 'email', 'password')
    