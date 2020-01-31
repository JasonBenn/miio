from django.db.models.query import QuerySet

from miio.data_types import CardType


def get_all_unarchived_cards(cards: QuerySet):
    return cards.filter(is_archived=False)


def get_all_cards_by_type(cards: QuerySet, card_type: CardType):
    return cards.filter(type=card_type)


