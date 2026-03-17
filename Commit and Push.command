#!/bin/zsh

set -e

cd "/Users/alex/Projects/GitHub/FritoPay"

echo "Repo: $(pwd)"
echo

current_branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$current_branch" != "main" ]]; then
  echo "Switching to main from $current_branch..."
  git checkout main
  echo
fi

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
echo "Syncing with GitHub..."
git fetch origin main

if ! git rebase origin/main; then
  echo
  echo "Rebase stopped because of a conflict."
  echo "Resolve the conflict, then run the command again."
  exit 1
fi

echo
echo "Pushing to GitHub..."
git push origin main

echo
echo "Done."
