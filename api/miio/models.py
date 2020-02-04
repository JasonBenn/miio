from django.contrib.postgres.fields import JSONField
from django.utils import timezone
from django.db.models import BooleanField
from django.db.models import DateTimeField
from django.db.models import Model
from django.db.models import TextField
from django_enumfield import enum

from miio.data_types import CardType


class Card(Model):
    created_at = DateTimeField(default=timezone.now, editable=False)
    title = TextField(null=True)
    body = TextField(null=True)
    is_archived = BooleanField(default=False)
    metadata = JSONField(null=True)
    type = enum.EnumField(CardType)

