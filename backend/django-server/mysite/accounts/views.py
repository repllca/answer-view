from dj_rest_auth.registration.views import RegisterView
from .serializers import CustomRegisterSerializer

from allauth.account.views import ConfirmEmailView
from django.contrib.auth import login
from django.shortcuts import redirect

# class CustomConfirmEmailView(ConfirmEmailView):
#     serializers_class = CustomRegisterSerializer
#     template_name = "account/email_confirm.html"
#     success_url = "dj-rest-auth/login/"

class CustomConfirmEmailView(ConfirmEmailView):
    def post(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        login(self.request, confirmation.email_address.user)
        return redirect('/dj-rest-auth/login/')  # ここにリダイレクト先のURLを指定

