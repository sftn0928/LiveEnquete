FROM node:10.19.0-alpine3.11
RUN apk update && \
  apk add git && \
  npm install -g npm
EXPOSE 8080
