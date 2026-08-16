import { core, strict, typed, viteplus } from "./src/oxlint/index.ts";
import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: ["CHANGELOG.md"],
  },
  lint: {
    extends: [core, strict, typed, viteplus],
    overrides: [
      {
        files: ["src/oxlint/*.ts"],
        rules: {
          "sort-keys": "deny",
        },
      },
    ],
  },
  pack: {
    deps: {
      neverBundle: true,
    },
    dts: true,
    entry: {
      index: "src/index.ts",
      oxlint: "src/oxlint/index.ts",
    },
    exports: true,
  },
  staged: {
    "*": "vp check --fix",
  },
});
