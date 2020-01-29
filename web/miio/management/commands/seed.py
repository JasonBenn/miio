from django.core.management import BaseCommand

from miio.models import Card


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Card.objects.create(title="Depend on the context", body="STRATEGY 1: We have a limited capacity to notice and remember things, so we use the current context to help inform what we should be paying attention to.\n\nThis helps us filter information.")
        Card.objects.create(title="Cathedral effect", body="Working in spaces with high ceilings has a positive effect on creativity, and vice versa.")
