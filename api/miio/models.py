from django.db import models
from django.db.models import TextField


class Card(models.Model):
    title = TextField()
    body = TextField()
