# Onedio Challenge

Nodejs challenge for Onedio.

# Start App With Docker

```bash
cp .env.example .env

vi .env

docker compose build --no-cache

docker compose up -d

docker compose exec app yarn test

docker compose logs -f app

```
