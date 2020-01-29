from django.core import serializers
from django.http import JsonResponse

from miio.models import Card


def index(request):
    return JsonResponse({"cards": list(Card.objects.all().values())})
