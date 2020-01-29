from miio.models import Card


def archive(card: Card):
    card.is_archived = True
    card.save()
