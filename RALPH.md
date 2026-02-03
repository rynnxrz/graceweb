# Ralph Wiggum - Graceweb Development

A spec-driven development loop for continuously improving the Grace portfolio website.

## Loop Process
1. Pick next spec from specs/ directory
2. Implement changes
3. Test and verify
4. Commit changes
5. Output `<promise>DONE</promise>`

## State Management
- specs/: Feature specifications with acceptance criteria
- logs/: Iteration logs
- Ralph loop checks for `<promise>DONE>` to proceed

## Running the Loop
```bash
# Start building
./scripts/ralph-loop.sh
```

## Completed Specs
- 01-performance-optimization.md
- 02-accessibility-ux.md
- 03-mobile-responsiveness.md
- 04-visual-polish.md
