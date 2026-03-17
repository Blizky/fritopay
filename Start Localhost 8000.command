#!/bin/zsh

cd "/Users/alex/Projects/GitHub/FritoPay" || exit 1
python3 -m http.server 8000
