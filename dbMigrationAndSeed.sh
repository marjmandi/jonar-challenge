#!/bin/bash

sleep 1
npx sequelize-cli db:migrate
sleep 1
npx sequelize-cli db:seed:all
node server.js