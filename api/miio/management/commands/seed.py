from django.core.management import BaseCommand

from miio.data_types import CardType
from miio.models import Card


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Card.objects.create(title="Depend on the context", body="STRATEGY 1: We have a limited capacity to notice and remember things, so we use the current context to help inform what we should be paying attention to.\n\nThis helps us filter information.", type=CardType.FLASH_CARD, is_archived=False)
        Card.objects.create(title="Cathedral effect", body="Working in spaces with high ceilings has a positive effect on creativity, and vice versa.", type=CardType.FLASH_CARD, is_archived=False)

