#!/bin/bash
# Grace web — local dev server (Node, supports content-editor save API)
# Double-click this file in Finder to start, or run from Terminal.

cd "$(dirname "$0")"

PORT=8080
echo "Starting local server at http://localhost:${PORT}"
echo "Press Ctrl+C to stop."
echo ""

# Open in default browser after a short delay
(sleep 1 && open "http://localhost:${PORT}") &

if command -v node >/dev/null 2>&1; then
  node dev-server.js
else
  echo "Node not found. Install Node.js (https://nodejs.org) — the content editor's"
  echo "Save button needs the Node dev-server's POST API."
  exit 1
fi
