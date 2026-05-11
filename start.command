#!/bin/bash
# Grace web — local dev server
# Double-click this file in Finder to start, or run from Terminal.

cd "$(dirname "$0")"

PORT=8000
echo "Starting local server at http://localhost:${PORT}"
echo "Press Ctrl+C to stop."
echo ""

# Open in default browser after a short delay
(sleep 1 && open "http://localhost:${PORT}") &

# Prefer python3, fall back to python
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
elif command -v python >/dev/null 2>&1; then
  python -m http.server "${PORT}"
else
  echo "Python not found. Install Python 3 or run: npx serve -p ${PORT}"
  exit 1
fi
