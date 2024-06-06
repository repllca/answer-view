from django.db import models


# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField("date published")


# class Choice(models.Model):
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)

# class Kadai(models.Model):
#     title = models.CharField(max_length=200)
#     question = models.CharField(max_length=200)
#     answer = models.CharField(max_length=200)
#     description = models.CharField(max_length=200)
#     owner = models.ForeignKey("auth.User", related_name="Kadai", on_delete=models.CASCADE)

class Kadai(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    owner = models.ForeignKey("auth.User", related_name="Kadai", on_delete=models.CASCADE)