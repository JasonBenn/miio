SHELL := /usr/bin/env bash

initdb:
	createuser -U postgres -s -P miio

createdb:
	echo "make password miio"
	createdb -W -h 127.0.0.1 miio -U miio -p 5432
	api/manage.py migrate
	echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'nah@nah.com', 'admin')" | python api/manage.py shell
	api/manage.py seed

dropdb:
	dropdb miio

psql:
	psql postgresql://miio:miio@127.0.0.1:5432/miio

migrate:
	api/manage.py migrate

deploy:
	yarn build
	rsync api web/build some-instance
