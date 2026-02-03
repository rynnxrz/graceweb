# Graceweb GitHub Pages Setup Guide

## Current Issue
GitHub Pages returning 404 - site not accessible at:
https://rynnxrz.github.io/graceweb/

## Solution: Enable GitHub Pages

### Method 1: GitHub Web Interface
1. Go to: https://github.com/rynnxrz/graceweb/settings/pages
2. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "main" / "(root)"
   - Folder: Select "/ (root)"
   - Click Save
3. Wait 1-2 minutes for deployment

### Method 2: Using gh CLI
```bash
gh repo set-default rynnxrz/graceweb
gh pages set --branch main --source /
```

### Expected Result
After enabling, site will be available at:
https://rynnxrz.github.io/graceweb/

## For Test Agent
Once Pages is enabled, test with:
```bash
curl -sI https://rynnxrz.github.io/graceweb/index.html
```

Expected response:
```
HTTP/2 200
```

## Ralph Fix Agent
When Test Agent detects Pages is enabled:
1. Verify site accessibility
2. Check all images load
3. Verify project detail pages work
4. Report health score
