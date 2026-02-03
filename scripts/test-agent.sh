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
        
        # Test ALL images in the projects folder
        log "Testing ALL project images..."
        local all_ok=true
        for img in co-silo-ferry-cover.png co-silo-ferry-1.png co-silo-ferry-2.png co-silo-ferry-3.png \
                   other-projects-cover.png \
                   ultra-plant-cover.png ultra-plant-1.png ultra-plant-2.png ultra-plant-3.png \
                   shadow-of-dream-cover.png shadow-of-dream-1.png shadow-of-dream-2.png shadow-of-dream-3.png \
                   whare-piwakawaka-cover.png whare-piwakawaka-1.png whare-piwakawaka-2.png whare-piwakawaka-3.png; do
            img_status=$(curl -sI "$SITE_URL/public/images/projects/$img" | head -1)
            if echo "$img_status" | grep -q "HTTP/2 200"; then
                log "  ✓ $img"
            else
                log "  ✗ $img - $img_status"
                all_ok=false
            fi
        done
        
        if [ "$all_ok" = true ]; then
            log "All 17 images loaded successfully!"
        else
            log "⚠ Some images are missing - Fix needed!"
        fi
        
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
