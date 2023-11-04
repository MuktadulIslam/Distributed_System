FROM node:20
WORKDIR /minilinkedin
# COPY docker-compose.yml docker-compose.yml
# CMD ["docker-compose", "up"]
RUN docker-compose up