from tabulate import tabulate
from django.core.management import BaseCommand

import sys
print(sys.path)

from miio.data_types import CardType
from miio.read import get_ranked_cards


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        cards = get_ranked_cards(20)
        card_values = [(
            dict(CardType.choices())[x.type].name,
            (x.title or x.body)[:50].replace('\n', '. '),
            x.created_at.strftime('%-m/%-d %-H:%-M')
        ) for x in cards]

        print(tabulate(card_values))
