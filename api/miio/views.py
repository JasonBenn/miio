import logging
import os

from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.generic import View
from rest_framework import renderers
from rest_framework import serializers
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from miio import models
from miio.models import Card
from miio.read import get_all_unarchived_cards
from miio.write import archive


class FrontendAppView(View):
    """
    Serves the compiled frontend entry point (only works if you have run `yarn
    run build`).
    """

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


class CardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'title', 'body', 'url']


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def archive(self, request, *args, **kwargs):
        card = self.get_object()
        return Response(archive(card))

    @action(detail=False)
    def get_all_unarchived(self, request, *args, **kwargs):
        print(get_all_unarchived_cards(self.queryset))
        return Response(self.queryset)

