#!/bin/bash
# Ralph Wiggum Agent - Continuous Spec-Driven Development
# Part of Graceweb CEO Management System

Ralph Wiggum 哲学:
- 每个循环 fresh context
- 一次处理一个 spec
- 只有 100% 完成才输出 <promise>DONE>
- 持续工作不停止

Ralph_LOOP_LOG="logs/ralph-loop.log"
SPECS_DIR="specs"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [RALPH] $1" | tee -a "$Ralph_LOOP_LOG"
}

get_next_spec() {
    # 找下一个未完成的 spec
    find "$SPECS_DIR" -name "*.md" -exec grep -L "Completed:" {} \; | head -1
}

run_loop() {
    log "========================================"
    log "RALPH WIGGUM LOOP STARTED"
    log "========================================"
    
    while true; do
        local spec=$(get_next_spec)
        
        if [ -z "$spec" ]; then
            log "All specs completed! Ralph is resting... 😴"
            sleep 60
            continue
        fi
        
        local spec_name=$(basename "$spec" .md)
        log "Picking next spec: $spec_name"
        
        # 读取 spec 内容
        log "Reading: $spec"
        local status=$(grep -A2 "Completed:" "$spec" 2>/dev/null || echo "Not completed")
        
        if echo "$status" | grep -q "Completed:"; then
            log "Already completed, skipping..."
            continue
        fi
        
        # 模拟 Ralph loop - 在真实场景中这会调用 Claude Code/其他 agent
        log "Working on: $spec_name"
        log "Acceptance criteria:"
        grep "^- \[" "$spec" | sed 's/^/  /'
        
        # 这里 Fix Agent 会执行实际工作
        # Ralph 只负责 picking spec 和 outputting DONE
        
        log "Waiting for Fix Agent to complete..."
        
        # Ralph 持续运行，每分钟检查一次
        sleep 60
    done
}

log "Ralph Wiggum Agent started - continuous spec-driven development"
run_loop
