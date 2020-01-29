from django.db import models
from django.db.models import BooleanField
from django.db.models import TextField
from django_enumfield import enum

from miio.data_types import CardType


class Card(models.Model):
    title = TextField()
    body = TextField()
    is_archived = BooleanField(default=False)
    type = enum.EnumField(CardType)
