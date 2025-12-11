#!/bin/bash
#Shutdown/destroy the dev env

function docker_down() {
    export DOCKER_HOST=
    docker-compose down --remove-orphans
    exit 0
}

docker_down
