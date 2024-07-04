#!/bin/bash

echo "Build Script Has Been Called"

echo "*** NPM INSTALL ***"

npm install

#echo "*** RUN BUILD ***"

npm run build

echo "*** RUN PRODUCTION BUILD ***"

#npm run start-prod
