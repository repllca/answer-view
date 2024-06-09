from django.db import models

class Thread(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

class Kadai(models.Model):
    answer = models.CharField(max_length=200,blank=True,null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    thread = models.ForeignKey(Thread,related_name="thrade",on_delete=models.CASCADE)
    owner = models.ForeignKey("auth.User", on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"owner: {self.owner}, answer: {self.answer}, description:{self.description}"
