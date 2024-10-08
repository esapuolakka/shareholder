#!/bin/bash
#Clean test results etc

#Docker
export DOCKER_HOST=
docker rm $(docker ps -qa --no-trunc --filter "status=exited") || true
docker rmi $(docker images -q) || true

#Clean conflict multiple containers
docker rmi $(docker images -q) 2>&1 |grep multiple |cut -d " " -f9 | sort |uniq |xargs docker rmi -f || true

docker volume prune -f

#Clean up sh2ju test results before next build to avoid cumulation
rm -fr results/*.xml
