from django.db.models.query import QuerySet
from django.utils.functional import partition

from miio.data_types import CardType
from miio.models import Card


def get_all_unarchived_cards(cards: QuerySet):
    return cards.filter(is_archived=False)


def get_all_cards_by_type(cards: QuerySet, card_type: CardType):
    return cards.filter(type=card_type)


def get_ranked_cards(num_cards: int = 10):
    cards = list(Card.objects.all())[:num_cards]
    # spinach, candy = partition(lambda x: x.type in [CardType.TWITTER], cards)
    # print(len(candy), len(spinach))
    return cards
