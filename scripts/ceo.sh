#!/bin/bash
# CEO Management System - Manages ALL Agents
# Graceweb Portfolio

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

case "${1:-help}" in
    start)
        echo "========================================"
        echo "   GRACEWEB CEO MANAGEMENT SYSTEM"
        echo "========================================"
        echo ""
        
        # 1. RALPH WIGGUM AGENT - NEVER STOPS!
        echo "1. Starting RALPH WIGGUM Agent (continuous)..."
        if [ -f "$SCRIPT_DIR/ralph-agent.sh" ]; then
            nohup "$SCRIPT_DIR/ralph-agent.sh" > logs/ralph-agent.out 2>&1 &
            echo "   ✓ Ralph WIGGUM started (PID: $!)"
            echo "   ⚡ RALPH NEVER SLEEPS - keeps working! 💪"
        fi
        
        # 2. Test Agent
        echo ""
        echo "2. Starting Test Agent (every 30 min)..."
        if [ -f "$SCRIPT_DIR/test-agent.sh" ]; then
            nohup "$SCRIPT_DIR/test-agent.sh" > logs/test-agent.out 2>&1 &
            echo "   ✓ Test Agent started"
        fi
        
        # 3. Fix Agent
        echo ""
        echo "3. Starting Fix Agent (every 5 min)..."
        if [ -f "$SCRIPT_DIR/fix-agent.sh" ]; then
            nohup "$SCRIPT_DIR/fix-agent.sh" > logs/fix-agent.out 2>&1 &
            echo "   ✓ Fix Agent started"
        fi
        
        # 4. Report Agent
        echo ""
        echo "4. Starting Report Agent (every 30 min)..."
        if [ -f "$SCRIPT_DIR/report-agent.sh" ]; then
            nohup "$SCRIPT_DIR/report-agent.sh" > logs/report-agent.out 2>&1 &
            echo "   ✓ Report Agent started"
        fi
        
        echo ""
        echo "========================================"
        echo "   ALL 4 AGENTS ACTIVE!"
        echo "========================================"
        echo ""
        echo "🤖 RALPH WIGGUM: ⚡ NEVER STOPS - keeps picking specs!"
        echo "🔍 Test:  Monitors site (30min)"
        echo "🔧 Fix:    Fixes issues (5min)"
        echo "📊 Report: Summarizes (30min)"
        echo ""
        ;;
    
    stop)
        echo "Stopping all agents..."
        pkill -f "ralph-agent.sh" && echo "✓ Ralph stopped"
        pkill -f "test-agent.sh" && echo "✓ Test stopped"
        pkill -f "fix-agent.sh" && echo "✓ Fix stopped"
        pkill -f "report-agent.sh" && echo "✓ Report stopped"
        ;;
    
    status)
        echo "========================================"
        echo "   GRACEWEB AGENT STATUS"
        echo "========================================"
        
        if pgrep -f "ralph-agent.sh" > /dev/null; then
            echo "✓ Ralph WIGGUM: RUNNING ⚡💪"
        else
            echo "✗ Ralph WIGGUM: NOT RUNNING"
        fi
        
        if pgrep -f "test-agent.sh" > /dev/null; then
            echo "✓ Test Agent:   RUNNING"
        else
            echo "✗ Test Agent:   NOT RUNNING"
        fi
        
        if pgrep -f "fix-agent.sh" > /dev/null; then
            echo "✓ Fix Agent:    RUNNING"
        else
            echo "✗ Fix Agent:    NOT RUNNING"
        fi
        
        if pgrep -f "report-agent.sh" > /dev/null; then
            echo "✓ Report Agent: RUNNING"
        else
            echo "✗ Report Agent: NOT RUNNING"
        fi
        ;;
    
    *)
        echo "========================================"
        echo "   GRACEWEB CEO MANAGEMENT"
        echo "========================================"
        echo ""
        echo "Usage: $0 {start|stop|status}"
        echo ""
        echo "4 AGENTS:"
        echo "  🤖 Ralph WIGGUM: ⚡ NEVER STOPS - picks specs!"
        echo "  🔍 Test:        Monitors (every 30 min)"
        echo "  🔧 Fix:          Fixes (every 5 min)"
        echo "  📊 Report:      Summarizes (every 30 min)"
        echo ""
        ;;
esac
