# Generated by Django 3.0.2 on 2020-01-31 21:55

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('miio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='metadata',
            field=django.contrib.postgres.fields.jsonb.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='body',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='card',
            name='title',
            field=models.TextField(null=True),
        ),
    ]
