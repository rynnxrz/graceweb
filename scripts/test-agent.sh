#!/bin/bash
# Test Agent - Continuous Website Monitoring
# Part of Graceweb CEO Management System

SITE_URL="https://rynnxrz.github.io/graceweb"
LOG_FILE="logs/test-agent.log"
INTERVAL=1800  # Run every 30 minutes

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

test_site() {
    local status=$(curl -sI "$SITE_URL/index.html" | head -1)
    
    if echo "$status" | grep -q "HTTP/2 200"; then
        log "✓ Site is UP (HTTP 200)"
        
        # Test images
        log "Testing images..."
        for img in co-silo-ferry-1.png other-projects-cover.png ultra-plant-1.png shadow-of-dream-1.png whare-piwakawaka-1.png; do
            img_status=$(curl -sI "$SITE_URL/images/projects/$img" | head -1)
            if echo "$img_status" | grep -q "HTTP/2 200"; then
                log "  ✓ $img"
            else
                log "  ✗ $img - $img_status"
            fi
        done
        
        # Test project pages
        log "Testing project detail pages..."
        for project in co-silo-ferry ultra-plant shadow-of-dream whare-piwakawaka other-projects; do
            page_status=$(curl -sI "$SITE_URL/project-detail.html?project=$project" | head -1)
            if echo "$page_status" | grep -q "HTTP/2 200"; then
                log "  ✓ $project"
            else
                log "  ✗ $project - $page_status"
            fi
        done
        
        return 0
    else
        log "✗ Site is DOWN or MISCONFIGURED"
        log "  Status: $status"
        log "  Please enable GitHub Pages per GITHUB_PAGES_SETUP.md"
        return 1
    fi
}

log "========================================"
log "Test Agent Started - Monitoring $SITE_URL"
log "Interval: ${INTERVAL} seconds"
log "========================================"

while true; do
    test_site
    log "Next test in ${INTERVAL} seconds..."
    sleep $INTERVAL
done
