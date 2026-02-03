#!/bin/bash
# CEO Management System - Manages Test and Fix Agents
# Graceweb Portfolio

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

case "${1:-help}" in
    start)
        echo "Starting Graceweb CEO Management System..."
        echo ""
        
        # Start Test Agent in background
        echo "Starting Test Agent..."
        if [ -f "$SCRIPT_DIR/test-agent.sh" ]; then
            nohup "$SCRIPT_DIR/test-agent.sh" > logs/test-agent.out 2>&1 &
            echo "✓ Test Agent started (PID: $!)"
        else
            echo "✗ test-agent.sh not found"
        fi
        
        echo ""
        
        # Start Fix Agent in background
        echo "Starting Fix Agent..."
        if [ -f "$SCRIPT_DIR/fix-agent.sh" ]; then
            nohup "$SCRIPT_DIR/fix-agent.sh" > logs/fix-agent.out 2>&1 &
            echo "✓ Fix Agent started (PID: $!)"
        else
            echo "✗ fix-agent.sh not found"
        fi
        
        echo ""
        echo "========================================"
        echo "CEO System Active"
        echo "========================================"
        ;;
    
    stop)
        echo "Stopping all agents..."
        pkill -f "test-agent.sh" && echo "✓ Test Agent stopped"
        pkill -f "fix-agent.sh" && echo "✓ Fix Agent stopped"
        ;;
    
    status)
        echo "========================================"
        echo "Graceweb Agent Status"
        echo "========================================"
        echo ""
        
        if pgrep -f "test-agent.sh" > /dev/null; then
            echo "✓ Test Agent: RUNNING"
        else
            echo "✗ Test Agent: NOT RUNNING"
        fi
        
        if pgrep -f "fix-agent.sh" > /dev/null; then
            echo "✓ Fix Agent: RUNNING"
        else
            echo "✗ Fix Agent: NOT RUNNING"
        fi
        
        echo ""
        echo "Logs:"
        [ -f "logs/test-agent.log" ] && echo "  - logs/test-agent.log"
        [ -f "logs/fix-agent.log" ] && echo "  - logs/fix-agent.log"
        ;;
    
    test)
        echo "Running single test..."
        bash "$SCRIPT_DIR/test-agent.sh"
        ;;
    
    fix)
        echo "Running single fix cycle..."
        bash "$SCRIPT_DIR/fix-agent.sh"
        ;;
    
    *)
        echo "Graceweb CEO Management System"
        echo ""
        echo "Usage: $0 {start|stop|status|test|fix}"
        echo ""
        echo "Commands:"
        echo "  start   - Start both Test and Fix agents"
        echo "  stop    - Stop all agents"
        echo "  status  - Show agent status"
        echo "  test    - Run single test cycle"
        echo "  fix     - Run single fix cycle"
        ;;
esac
