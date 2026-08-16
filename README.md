# @fnko/config

<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.shieldcn.dev/npm/@fnko/config.svg?variant=secondary&amp;mode=dark"><img alt="npm Version" src="https://www.shieldcn.dev/npm/@fnko/config.svg?variant=secondary&amp;mode=light"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.shieldcn.dev/npm/dm/@fnko/config.svg?variant=secondary&amp;mode=dark"><img alt="npm Monthly Downloads" src="https://www.shieldcn.dev/npm/dm/@fnko/config.svg?variant=secondary&amp;mode=light"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://www.shieldcn.dev/github/license/feenko/config.svg?variant=secondary&amp;mode=dark"><img alt="License" src="https://www.shieldcn.dev/github/license/feenko/config.svg?variant=secondary&amp;mode=light"></picture>
![toolchain Vite+](https://shieldcn.dev/badge/toolchain-Vite%2B.svg?variant=branded&logo=vite)

A sensible, opinionated [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) config for modern JavaScript and TypeScript projects.

## Installation

Install [`@fnko/config`](https://npmx.dev/package/@fnko/config) as a dev dependency:

```bash
$ npm add -D @fnko/config
```

Add rulesets to your Vite+ config:

```ts
import { defineConfig } from "vite-plus";
import { core, strict, typed, viteplus } from "@fnko/config/oxlint";

export default defineConfig({
  lint: {
    extends: [core, strict, typed, viteplus],
  },
});
```

> [!TIP]
> If you're not using Vite+, you can use the rulesets directly with Oxlint:
>
> <details>
> <summary>Show config</summary>
>
> ```ts
> import { defineConfig } from "oxlint";
> import { core, strict, typed } from "@fnko/config/oxlint";
>
> export default defineConfig({
>   extends: [core, strict, typed],
> });
> ```
>
> </details>

## Rulesets

| Ruleset                                | Description                                          |
| -------------------------------------- | ---------------------------------------------------- |
| [`core`](./src/oxlint/core.ts)         | General project rules applicable for most codebases. |
| [`jsdoc`](./src/oxlint/jsdoc.ts)       | JSDoc documentation rules.                           |
| [`strict`](./src/oxlint/strict.ts)     | Stricter rules that might not fit all codebases.     |
| [`typed`](./src/oxlint/typed.ts)       | TypeScript rules that use type information.          |
| [`viteplus`](./src/oxlint/viteplus.ts) | Vite+ toolchain rules.                               |

## Philosophy

### Target

We target modern, ESM-first JavaScript and TypeScript projects. Read [Move on to ESM-only](https://antfu.me/posts/move-on-to-esm-only) to learn why.

### Rules

Rule selection is subjective. If you disagree with a rule or have a suggestion, feel free to [open an issue](https://github.com/feenko/config/issues/new).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
