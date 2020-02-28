ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine

RUN apk update \
  && apk upgrade \
  && apk add --no-cache bash \
  && npm install npm -g
RUN npm install -g nodemon
