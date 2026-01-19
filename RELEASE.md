# Release & Automation Guide

## Automated Git Hooks

Husky is now set up to automate your workflow:

### Pre-commit Hook
- **Trigger**: Before every commit
- **Action**: Automatically runs `npm run build` to compile TypeScript
- **Benefit**: Ensures `dist/` files are always up-to-date before committing

### Post-merge Hook
- **Trigger**: After pulling changes
- **Action**: Auto-installs dependencies if `package-lock.json` changed
- **Benefit**: No more manual `npm install` after pulls

## Release Commands

Use these one-command releases for seamless version bumping + publishing:

### Patch Release (bug fixes)
```bash
npm run release:patch
```
Updates: 0.2.0 → 0.2.1

### Minor Release (new features)
```bash
npm run release:minor
```
Updates: 0.2.0 → 0.3.0

### Major Release (breaking changes)
```bash
npm run release:major
```
Updates: 0.2.0 → 1.0.0

Each command automatically:
1. Validates build and tests
2. Bumps version in package.json
3. Creates a git tag
4. Publishes to NPM
5. Pushes commits and tags to remote

## Manual Steps (if needed)

Build:
```bash
npm run build
```

Validate library:
```bash
npm run validate
```

Publish manually:
```bash
npm publish
```
