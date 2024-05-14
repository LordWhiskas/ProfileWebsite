#!/bin/bash

recent_commits=$(git log -5 --pretty=format:"%h - %an, %ar : %s")

echo -e "\n## Recent Changes\n$recent_commits\n" >> README.md
