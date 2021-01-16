start:
	docker-compose up app

test: node_modules
	docker-compose run --rm node-service yarn test

check: test

build: node_modules
	docker-compose run --rm node-service yarn build

node_modules:
	yarn
