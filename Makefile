SHELL := /usr/bin/env bash

initdb:
	createuser -s -P miio

createdb:
	echo "make password miio"
	createdb -W -h 127.0.0.1 miio -U miio -p 5432
	web/manage.py migrate
	echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'nah@nah.com', 'admin')" | python web/manage.py shell
	web/manage.py seed_db

dropdb:
	dropdb miio

psql:
	psql postgresql://miio:miio@127.0.0.1:5432/miio

migrate:
	web/manage.py migrate
