start:
	docker-compose up app

test:
	docker-compose run --rm test yarn test
