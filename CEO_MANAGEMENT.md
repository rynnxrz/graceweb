# Graceweb - CEO Agent Management System

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CEO (Main - Bob)                          │
│              Coordinates all agents, continuous improvement      │
└─────────────────────────────────────────────────────────────────┘
                                    │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Test Agent   │    │   Fix Agent    │    │  Report Agent   │
│  (audit-web)   │    │  (Ralph)      │    │  (Progress)    │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ Every 30 min   │    │ Every 5 min    │    │ Every 30 min    │
│ • Site uptime   │    │ • Find issues  │    │ • Summarize     │
│ • Images load   │    │ • Create spec │    │ • Report to     │
│ • Pages work    │    │ • Fix issues  │    │   human         │
│ • SEO health    │    │ • Commit fix  │    │ • Track progress │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                            │                            │
         └────────────────────────────┼────────────────────────────┘
                                      ▼
                         ┌─────────────────────┐
                         │   GitHub (main)      │
                         │   Continuous Deploy  │
                         └─────────────────────┘
```

## Agents

### Test Agent
**Skill:** audit-website  
**Frequency:** Every 30 minutes  
**Monitors:**
- Website availability
- Image loading
- Project detail pages
- SEO issues
- Performance

### Fix Agent  
**Skill:** ralph-wiggum  
**Frequency:** Every 5 minutes  
**Responsibilities:**
- Check for pending specs
- Run Ralph loop
- Fix issues found
- Commit and push

### Report Agent ⭐ NEW
**Frequency:** Every 30 minutes  
**Responsibilities:**
- Generate progress summary
- Report to human
- Track completed work
- Highlight pending tasks

## Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     CONTINUOUS CYCLE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Test → Report → CEO Decides → Fix (Ralph) → Test → ...       │
│    ↑                                                          │
│    └──────────────────────────────────────────────────────     │
│                                                                 │
│  Report Agent generates summary every 30 min                    │
│  Human reviews → CEO coordinates fixes                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Commands

```bash
# Start all agents
bash scripts/ceo.sh start

# Check status
bash scripts/ceo.sh status

# Stop all
bash scripts/ceo.sh stop

# Manual operations
bash scripts/ceo.sh test     # Run test
bash scripts/ceo.sh fix      # Run fix cycle
bash scripts/ceo.sh report   # Generate report
```

## Output Files

- `logs/test-agent.log` - Test results
- `logs/fix-agent.log` - Fix operations
- `logs/report-agent.log` - Report logs
- `logs/progress-summary.md` - **Progress report (updated every 30 min)**

## Current Status
- Test Agent: [Waiting to start]
- Fix Agent: [Waiting to start]
- Report Agent: [Waiting to start]
