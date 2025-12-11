#!/bin/bash
#Deploy to prod/stg

#Take env as first parameter, CI build number as the second
ENV=$1

NAME=shareholder-list-team2


#No need to change anything below this line
SERVICE_NAME=$NAME-$ENV
export IMAGE_VERSION=$ENV-$2
COMPOSE_FILE="docker-compose.${ENV}.yml"
#export CONFIG_VERSION=`date +%Y%m%d%H%m`
export CONFIG_VERSION=$IMAGE_VERSION

if [ -z "$SERVICE_NAME" ] || [ -z "$IMAGE_VERSION" ]; then
    echo "Usage: ./deploy.sh <env> <version>, e.g. ./deploy.sh prod prod-124"
    exit 1
fi

# shellcheck disable=SC2235
if ( [ "$BUILD_ENV" == "stg" ] || [ "$BUILD_ENV" == "prod" ] ) && [ -z "$DOCKER_REGISTRY_USERNAME" ]; then
    echo "ERROR: Building manually (outside Jenkins?). Please export DOCKER_REGISTRY_USERNAME to env from phz.kdbx"
    exit 1
fi
# shellcheck disable=SC2235
if ( [ "$BUILD_ENV" == "stg" ] || [ "$BUILD_ENV" == "prod" ] ) && [ -z "$DOCKER_REGISTRY_PASSWORD" ]; then
    echo "ERROR: Building manually (outside Jenkins?). Please export DOCKER_REGISTRY_PASSWORD to env from phz.kdbx"
    exit 1
fi

#Do not deploy dev images
if [ "$ENV" == "stg" ] || [ "$ENV" == "prod" ]; then
    echo "Deploying $IMAGE_VERSION to $ENV"
    docker login docker-registry-in.phz.fi -u "$DOCKER_REGISTRY_USERNAME" -p "$DOCKER_REGISTRY_PASSWORD"

    export DOCKER_HOST=docker-swarm-master.in.phz.fi
    #docker stack rm $SERVICE_NAME
    docker stack deploy --with-registry-auth --compose-file "$COMPOSE_FILE" "$SERVICE_NAME"
    export DOCKER_HOST=
else
    echo "Skip deploy of $ENV images"
fi

