from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import CustomUser
from allauth.account.adapter import get_adapter

class CustomRegisterSerializer(RegisterSerializer):
    school_name = serializers.CharField()  

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['school_name'] = self.validated_data.get('school_name', '')
        return data

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.school_name = self.cleaned_data.get('school_name')
        adapter.save_user(request, user, self)
        return user
