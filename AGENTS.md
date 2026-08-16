# AGENTS.md

`@fnko/config` is an npm package of opinionated Oxlint rulesets.

## Rulesets

Rulesets live in `src/oxlint/*.ts`, re-exported from `src/oxlint/index.ts` and `src/index.ts`.

- Set every rule to `"deny"`.
- A new domain gets its own file under `src/oxlint/`.

## Commands

All tooling runs through the `vp` CLI:

| Command             | Purpose              |
| ------------------- | -------------------- |
| `vp install`        | Install deps         |
| `vp check --fix`    | Format + lint source |
| `vp pack`           | Build to `dist/`     |
| `vp exec changeset` | Add a changeset      |

Pre-commit hooks auto-fix staged files.

## Before finishing

- [ ] Run `vp check --fix`.
- [ ] Run `vp pack`.
- [ ] Add a changeset when the change alters a published ruleset.
