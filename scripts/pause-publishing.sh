#!/bin/bash

# Toggle publishing pause

if [ -f ".publishing-paused" ]; then
  rm ".publishing-paused"
  echo "Publishing resumed"
else
  touch ".publishing-paused"
  echo "Publishing paused"
fi
