#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Set repository name
REPO_NAME="car-booking-app"

# Initialize git repository
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial commit"

# Create GitHub repository using GitHub CLI
gh repo create "$REPO_NAME" --public --source=. --remote=origin --push

echo "GitHub repository '$REPO_NAME' created and code pushed successfully."
