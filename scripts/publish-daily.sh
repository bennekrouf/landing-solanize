#!/bin/bash

# Daily blog post publisher
# Moves one post from queue to blog for each language

publish_post() {
  local lang=$1
  local queue_dir="content/${lang}/queue"
  local blog_dir="content/${lang}/blog"

  # Find oldest post in queue (by filename date or file modification time)
  local post=$(find "$queue_dir" -type f -name "*.md" | sort | head -n 1)

  if [ -z "$post" ]; then
    echo "No posts in queue for ${lang}"
    return 1
  fi

  local filename=$(basename "$post")

  # Move to blog
  mv "$post" "$blog_dir/$filename"
  echo "Published: ${lang}/${filename}"

  return 0
}

# Check if publishing is paused
if [ -f ".publishing-paused" ]; then
  echo "Publishing is paused (remove .publishing-paused to resume)"
  exit 0
fi

# Check if already published today
TODAY=$(date +%Y-%m-%d)
LAST_PUBLISH_FILE=".last-publish"

if [ -f "$LAST_PUBLISH_FILE" ]; then
  LAST_PUBLISH=$(cat "$LAST_PUBLISH_FILE")
  if [ "$LAST_PUBLISH" = "$TODAY" ]; then
    echo "Already published today ($TODAY)"
    exit 0
  fi
fi

# Publish for each language
echo "Publishing posts for $TODAY..."

publish_post "en"
EN_STATUS=$?

publish_post "fr"
FR_STATUS=$?

# Update blog data if any posts were published
if [ $EN_STATUS -eq 0 ] || [ $FR_STATUS -eq 0 ]; then
  echo "Regenerating blog data..."
  yarn blog-data

  # Record publish date
  echo "$TODAY" >"$LAST_PUBLISH_FILE"
  echo "Done!"
else
  echo "No posts published"
fi
