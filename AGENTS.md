# AGENTS.md

## Project

`@fnko/config` is a small npm package of opinionated Oxlint rulesets.

If you want to learn more about the project, see the @README.md.

## Commands

All tooling runs through the **Vite+** CLI (`vp`):

| Command             | Purpose          |
| ------------------- | ---------------- |
| `vp install`        | Install deps     |
| `vp check`          | Format + lint    |
| `vp pack`           | Build to `dist/` |
| `vp exec changeset` | New changeset    |

Pre-commit hooks auto-fix staged files.

## Before finishing

- [ ] Run `vp check --fix`
- [ ] Add a changeset if the change affects users
