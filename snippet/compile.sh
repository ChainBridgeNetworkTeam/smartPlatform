#!/bin/bash
echo 'compile and run ts file!'
tsc $1 --resolveJsonModule && node $1