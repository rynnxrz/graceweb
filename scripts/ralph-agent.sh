#!/bin/bash
# Ralph Wiggum Agent - Continuous Spec-Driven Development
# Part of Graceweb CEO Management System
#
# Philosophy:
# - Fresh context each loop
# - Process one spec at a time
# - Only output <promise>DONE> when 100% complete
# - NEVER STOP - keep working!

Ralph_LOOP_LOG="logs/ralph-loop.log"
SPECS_DIR="specs"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [RALPH] $1" | tee -a "$Ralph_LOOP_LOG"
}

get_next_spec() {
    find "$SPECS_DIR" -name "*.md" -exec grep -L "Completed:" {} \; | head -1
}

run_loop() {
    log "========================================"
    log "RALPH WIGGUM LOOP STARTED"
    log "========================================"
    
    while true; do
        local spec=$(get_next_spec)
        
        if [ -z "$spec" ]; then
            log "All specs completed! Ralph resting..."
            sleep 60
            continue
        fi
        
        local spec_name=$(basename "$spec" .md)
        log "Picking spec: $spec_name"
        
        local status=$(grep "Completed:" "$spec" 2>/dev/null || echo "pending")
        
        if echo "$status" | grep -q "Completed:"; then
            log "Already completed, skipping..."
            continue
        fi
        
        log "Acceptance criteria:"
        grep "^- \[" "$spec" | sed 's/^/  /'
        
        log "Waiting for Fix Agent to complete work..."
        
        # Ralph checks every minute
        sleep 60
    done
}

log "Ralph Wiggum Agent started - continuous spec-driven development"
run_loop
