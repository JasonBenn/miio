from django.core.management import BaseCommand

from miio.data_types import CardType
from miio.models import Card


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Card.objects.create(
            title="Depend on the context",
            body="STRATEGY 1: We have a limited capacity to notice and remember things, so we use the current context to help inform what we should be paying attention to.\n\nThis helps us filter information.",
            type=CardType.FLASH_CARD,
        )
        Card.objects.create(
            title="Cathedral effect",
            body="Working in spaces with high ceilings has a positive effect on creativity, and vice versa.",
            type=CardType.FLASH_CARD,
        )
        Card.objects.create(
            body="New blog post: Contrastive Self-Supervised Learning.\n\nContrastive methods learn representations by encoding what makes two things similar or different. I find them very promising and go over some recent works such as DIM, CPC, AMDIM, CMC, MoCo etc.\n\nhttps://ankeshanand.com/blog/2020/01/26/contrative-self-supervised-learning.html",
            metadata={
                "url": "https://twitter.com/ankesh_anand/status/1222623481038360577"
            },
            type=CardType.TWITTER,
        )
        Card.objects.create(
            body="Two things that push my thinking more than anything else: Twitter & my podcast\n\nTweeting encourages me to codify learnings, refining them in the process. Positive feedback loop to keep learning\n\nPodcast presents a forcing function to know enough abt a topic to interview an expert",
            metadata={
                "url": "https://twitter.com/eriktorenberg/status/1222763034482900992"
            },
            type=CardType.TWITTER,
        )
        Card.objects.create(
            title="Susana Dancy",
            metadata={"phone_number": "1-562-867-5309", "email": "susana@dancy.com"},
            type=CardType.PERSON
        )
        Card.objects.create(
            title="Hugh Dubberly",
            metadata={"email": "hugh@dubberly.com"},
            type=CardType.PERSON
        )
