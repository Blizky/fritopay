#!/bin/zsh

set -e

cd "/Users/alex/Projects/GitHub/FritoPay"

echo "Repo: $(pwd)"
echo

git add .

if [[ -n "$(git status --porcelain)" ]]; then
  commit_message="auto update $(date '+%Y-%m-%d %H:%M:%S')"
  echo "Commit: $commit_message"
  echo
  git commit -m "$commit_message"
else
  echo "No local changes to commit."
fi

echo
git push origin main

echo
echo "Done."
