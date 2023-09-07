#!/bin/bash

echo '{"main": "caffeine_cal.js", "output": "caffeine_cal.blob"}' > caffeine_cal.json &&
node --experimental-sea-config caffeine_cal.json &&
cp $(command -v node) hello &&
npx postject hello NODE_SEA_BLOB sea-prep.blob \
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2

