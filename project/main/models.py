from django.db import models

# Create your models here.
class Score(models.Model):
    total = models.IntegerField()
    r1 = models.IntegerField()
    r2 = models.IntegerField()
    r3 = models.IntegerField()
    r4 = models.IntegerField()
    r5 = models.IntegerField()
