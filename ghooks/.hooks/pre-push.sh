#!/usr/bin/env bash

echo "**********************************"
echo "*    Start pre-push git hook     *"
echo "**********************************"

error="$(./build-backend.sh | tee /dev/stderr | grep "BUILD FAILURE")";

if [ -z "$error" ]
then
    echo "Everything is ok";
    exit 0;
else
    echo "Something went wrong! Please see console output and fix it!";
    exit 1;
fi
