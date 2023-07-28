#!/usr/bin/env bash

if [[ -z $1 ]]; then
    echo "Error: missing website arg, pass domain.tld (e.g. atlbitdevs.org)"
fi

echo "Scraping website: $1"

wget \
    --recursive \
    --no-clobber \
    --page-requisites \
    --html-extension \
    --convert-links \
    --restrict-file-names=windows \
    --domains $1 \
    --no-parent https://$1
