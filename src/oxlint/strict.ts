import { defineConfig } from "oxlint";

export default defineConfig({
  rules: {
    "accessor-pairs": "deny",
    "max-classes-per-file": "deny",
    "max-depth": "deny",
    "max-lines": "deny",
    "max-lines-per-function": "deny",
    "max-nested-callbacks": "deny",
    "typescript/ban-ts-comment": "deny",
  },
});
