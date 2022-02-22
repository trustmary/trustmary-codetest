up:
	docker compose up -d

down:
	docker compose down

ps:
	docker compose ps

install:
	yarn --cwd ./server

dev-server:
	yarn --cwd ./server dev-server

init-db:
	yarn --cwd ./server init-db
