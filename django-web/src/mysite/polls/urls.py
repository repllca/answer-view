from django.urls import path

from . import views


# ここに書いたurlが画面に表示される？
urlpatterns = [
    path("",views.index,name = "index"),
    path("test/",views.test)
]