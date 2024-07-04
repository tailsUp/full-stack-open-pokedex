#!/bin/bash

echo "Build Script Has Been Called"

echo "*** NPM INSTALL ***"

run npm run install

echo "*** RUN BUILD ***"

run npm run build

echo "*** RUN PRODUCTION BUILD ***"

run npm run start-prod
