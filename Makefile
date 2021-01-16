start:
	docker-compose up app

test: node_modules
	docker-compose run --rm node-service yarn test

check: test

build: node_modules
	docker-compose run --rm node-service yarn build

node_modules:
	docker-compose run --rm node-service yarn test

prod_node_modules:
	make prod_command command=yarn

prod_test:
	make prod_command command="yarn test"

prod_build:
	make prod_command command="yarn build"

prod_command:
	docker-compose run --rm node-prod $(command)
