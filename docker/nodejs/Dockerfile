FROM alpine:3.18

LABEL maintainer="Emir Buğra Köksalan <emir@rust.tc>"

ARG DOCKER_UID
ARG DOCKER_GID
ARG DOCKER_USER
ARG DOCKER_GROUP
ARG MYSQL_DATABASE
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG NODE_ENV

ENV DOCKER_UID=${DOCKER_UID}
ENV DOCKER_GID=${DOCKER_GID}
ENV DOCKER_USER=${DOCKER_USER}
ENV DOCKER_GROUP=${DOCKER_GROUP}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}
ENV MYSQL_ROOT_PASSWORD=${MYSQL_PASSWORD}
ENV NODE_ENV=${NODE_ENV}

RUN apk update
RUN apk upgrade
RUN apk add wget curl ca-certificates tini
RUN update-ca-certificates

RUN addgroup -g ${DOCKER_GID} ${DOCKER_GROUP}
RUN adduser -D -G ${DOCKER_GROUP} -u ${DOCKER_UID} ${DOCKER_USER}

RUN apk add nodejs-current npm

RUN apk add supervisor

RUN npm install -g npm
RUN npm install -g yarn
RUN npm install -g typescript ts-node

# When you done clear apk cache.
RUN rm -f /var/cache/apk/*

USER ${DOCKER_USER}

RUN mkdir -p /home/${DOCKER_USER}/app
WORKDIR /home/${DOCKER_USER}/app

EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "--"]

# install dependencies
RUN /usr/local/bin/yarn

# start the app
#CMD /usr/local/bin/yarn dev

CMD if [[ "$NODE_ENV" = "development" ]] ; then /usr/local/bin/yarn dev ; else /usr/local/bin/yarn start ; fi
