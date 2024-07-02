from django.db import models
from django.conf import settings

class Kadai(models.Model):
    title = models.CharField(max_length=100)
    answer = models.CharField(max_length=200,blank=True,null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return f"title: {self.title}, owner: {self.owner}, answer: {self.answer}, description:{self.description}"
