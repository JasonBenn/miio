SHELL := /usr/bin/env bash

initdb:
	# might have to become OS user postgres to create: `sudo -u postgres -i`
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
	yarn --cwd ./web install
	yarn --cwd ./web build
	make sync

sync:
	rsync --delete -avzr --include=api --include=api/* --include=web --include=web/build/ --include=web/build/* --exclude='web/*' --filter=':- .gitignore' . jasonbenn@35.185.235.216:/home/jasonbenn/miio


ssh-gcloud:
	gcloud beta compute --project "miio-266719" ssh --zone "us-west1-b" "miio"

ssh:
	ssh jasonbenn@35.185.235.216
