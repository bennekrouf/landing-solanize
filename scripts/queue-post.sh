#!/bin/bash

# Helper to add a post to the queue

if [ $# -lt 2 ]; then
  echo "Usage: $0 <language> <post-file>"
  echo "Example: $0 en my-new-post.md"
  exit 1
fi

LANG=$1
POST=$2

if [ ! -f "$POST" ]; then
  echo "Error: File $POST not found"
  exit 1
fi

QUEUE_DIR="content/${LANG}/queue"
cp "$POST" "$QUEUE_DIR/"

echo "Added to ${LANG} queue: $(basename $POST)"
