from allauth.account.views import ConfirmEmailView  
from django.contrib.auth import login
from django.shortcuts import redirect

class CustomConfirmEmailView(ConfirmEmailView):
    template_name = "account/email_confirm.html"
    success_url = "http://localhost:3000/login/"

    def post(self, *args, **kwargs):
        self.object = confirmation = self.get_object()
        confirmation.confirm(self.request)
        login(self.request, confirmation.email_address.user)
        return redirect(self.get_success_url())

    def get_success_url(self):
        return self.success_url