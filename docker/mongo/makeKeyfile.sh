#!/bin/bash
set -e

cd "$(dirname "$0")"
openssl rand -base64 756 > ./mongod.keyfile
chmod 400 ./mongod.keyfile
