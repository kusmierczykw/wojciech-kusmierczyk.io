#!/bin/bash

cd docker || exit
docker-compose down -v
cd ..
