#!/bin/bash

cd docker || exit
docker-compose build
docker-compose up -d
docker-compose exec gatsby bash
cd ..
