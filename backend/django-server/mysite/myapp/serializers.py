from rest_framework import serializers
from .models import Kadai

class KadaiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kadai
        fields = '__all__'