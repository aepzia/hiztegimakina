#!/bin/bash
KOP=`lpstat -o  | wc -l`
if [ "$KOP" -gt "0" ]; then
echo "BAI"
cancel -a -x
else
echo "EZ"
fi

