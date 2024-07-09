from django.contrib import admin
from django.urls import path, include, re_path
from allauth.account.views import ConfirmEmailView

urlpatterns = [
    path('admin/', admin.site.urls),#管理サイト
    path("myapp/",include("myapp.urls")),#myapp
    path("accounts/",include("accounts.urls")),
    path('d/', include('dj_rest_auth.urls')),
    path('d/r/',include('dj_rest_auth.registration.urls')),
    re_path('confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(),name='account_confirm_email'),
]
