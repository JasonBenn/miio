
from django_enumfield import enum

class CardType(enum.Enum):
    TWITTER = 0
    ARTICLE = 1
    FREEFORM = 2
    FLASH_CARD = 3
    NOTE = 4
