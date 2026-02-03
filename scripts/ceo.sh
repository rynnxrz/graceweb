#!/bin/bash
# CEO Management System - Manages All Agents
# Graceweb Portfolio

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

case "${1:-help}" in
    start)
        echo "========================================"
        echo "   GRACEWEB CEO MANAGEMENT SYSTEM"
        echo "========================================"
        echo ""
        
        # Start Test Agent (continuous monitoring)
        echo "1. Starting Test Agent (every 30 min)..."
        if [ -f "$SCRIPT_DIR/test-agent.sh" ]; then
            nohup "$SCRIPT_DIR/test-agent.sh" > logs/test-agent.out 2>&1 &
            echo "   ✓ Test Agent started (PID: $!)"
        fi
        
        # Start Fix Agent (reactive fixes)
        echo ""
        echo "2. Starting Fix Agent (every 5 min)..."
        if [ -f "$SCRIPT_DIR/fix-agent.sh" ]; then
            nohup "$SCRIPT_DIR/fix-agent.sh" > logs/fix-agent.out 2>&1 &
            echo "   ✓ Fix Agent started (PID: $!)"
        fi
        
        # Start Report Agent (progress summaries)
        echo ""
        echo "3. Starting Report Agent (every 30 min)..."
        if [ -f "$SCRIPT_DIR/report-agent.sh" ]; then
            nohup "$SCRIPT_DIR/report-agent.sh" > logs/report-agent.out 2>&1 &
            echo "   ✓ Report Agent started (PID: $!)"
        fi
        
        echo ""
        echo "========================================"
        echo "   ALL AGENTS ACTIVE"
        echo "========================================"
        echo ""
        echo "Agents running:"
        echo "  • Test:  Monitors site availability, images, pages"
        echo "  • Fix:    Reactively fixes issues (Ralph Wiggum)"
        echo "  • Report: Generates progress summaries"
        echo ""
        echo "Commands:"
        echo "  bash scripts/ceo.sh status   - Check all agents"
        echo "  bash scripts/ceo.sh stop      - Stop all agents"
        echo "  bash scripts/ceo.sh test     - Run single test"
        echo "  bash scripts/ceo.sh report    - Generate report"
        echo ""
        ;;
    
    stop)
        echo "Stopping all agents..."
        pkill -f "test-agent.sh" && echo "✓ Test Agent stopped"
        pkill -f "fix-agent.sh" && echo "✓ Fix Agent stopped"
        pkill -f "report-agent.sh" && echo "✓ Report Agent stopped"
        ;;
    
    status)
        echo "========================================"
        echo "   GRACEWEB AGENT STATUS"
        echo "========================================"
        
        if pgrep -f "test-agent.sh" > /dev/null; then
            echo "✓ Test Agent:    RUNNING"
        else
            echo "✗ Test Agent:    NOT RUNNING"
        fi
        
        if pgrep -f "fix-agent.sh" > /dev/null; then
            echo "✓ Fix Agent:      RUNNING"
        else
            echo "✗ Fix Agent:      NOT RUNNING"
        fi
        
        if pgrep -f "report-agent.sh" > /dev/null; then
            echo "✓ Report Agent:   RUNNING"
        else
            echo "✗ Report Agent:   NOT RUNNING"
        fi
        
        echo ""
        echo "Logs:"
        [ -f "logs/test-agent.log" ] && echo "  • logs/test-agent.log"
        [ -f "logs/fix-agent.log" ] && echo "  • logs/fix-agent.log"
        [ -f "logs/report-agent.log" ] && echo "  • logs/report-agent.log"
        [ -f "logs/progress-summary.md" ] && echo "  • logs/progress-summary.md"
        ;;
    
    test)
        echo "Running single test cycle..."
        bash "$SCRIPT_DIR/test-agent.sh"
        ;;
    
    fix)
        echo "Running single fix cycle..."
        bash "$SCRIPT_DIR/fix-agent.sh"
        ;;
    
    report)
        echo "Generating progress report..."
        bash "$SCRIPT_DIR/report-agent.sh"
        ;;
    
    help|*)
        echo "========================================"
        echo "   GRACEWEB CEO MANAGEMENT"
        echo "========================================"
        echo ""
        echo "Usage: $0 {start|stop|status|test|fix|report}"
        echo ""
        echo "Commands:"
        echo "  start   - Start ALL agents (Test + Fix + Report)"
        echo "  stop    - Stop all agents"
        echo "  status  - Show all agent statuses"
        echo "  test    - Run single test cycle"
        echo "  fix     - Run single fix cycle"
        echo "  report  - Generate progress report"
        echo ""
        echo "Agents:"
        echo "  • Test:   Every 30 min - monitors site"
        echo "  • Fix:    Every 5 min  - fixes issues (Ralph)"
        echo "  • Report: Every 30 min - summarizes progress"
        echo ""
        ;;
esac
