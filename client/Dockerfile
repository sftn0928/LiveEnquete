ARG NODE_VERSION

FROM node:${NODE_VERSION}
RUN apt-get update && \
  apt-get install -y vim less
RUN npm install npm -g
RUN npm install -g nodemon
