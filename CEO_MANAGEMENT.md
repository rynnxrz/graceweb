# Graceweb - CEO Agent Management System

## Architecture
- **CEO (Main)**: Me - coordinates all agents
- **Test Agent**: Continuously audits website health
- **Fix Agent**: Uses Ralph Wiggum to fix issues

## Agents Setup

### Test Agent (Continuous Monitoring)
Runs every 30 minutes to check:
- Website availability
- Image loading
- Page performance
- Broken links
- SEO issues

### Fix Agent (Ralph Wiggum)
When Test Agent finds issues:
1. Creates a spec in specs/
2. Implements fix
3. Commits and pushes
4. Reports completion

## Workflow
```
Test Agent → Found Issues → Fix Agent → Ralph Loop → Done
     ↑                                    ↓
     └──── Continuous Monitoring ←──────┘
```

## Running the System

```bash
# Start Test Agent (continuous monitoring)
./scripts/test-agent.sh

# Start Fix Agent (reactive)
./scripts/fix-agent.sh

# Or run both
./scripts/ceo-system.sh
```

## Current Status
- Test Agent: [NOT RUNNING]
- Fix Agent: [NOT RUNNING]
- Ralph Loop: [ACTIVE]

## Issues Found
1. ⚠️ GitHub Pages returning 404
   - Cause: Pages not configured
   - Priority: HIGH
   - Fix: Enable Pages in repo settings

2. ⚠️ Images not loading
   - Cause: Site not accessible
   - Priority: HIGH
   - Fix: Enable Pages first
