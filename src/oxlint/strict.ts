import { defineConfig } from "oxlint";

export default defineConfig({
  rules: {
    complexity: "deny",
    "id-length": ["deny", { exceptions: ["i", "j", "k", "n", "x", "y", "z"], max: 40, min: 2 }],
    "max-classes-per-file": "deny",
    "max-depth": "deny",
    "max-lines": "deny",
    "max-lines-per-function": "deny",
    "max-nested-callbacks": "deny",
    "max-params": "deny",
    "no-magic-numbers": [
      "deny",
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        ignoreClassFieldInitialValues: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "typescript/ban-ts-comment": "deny",
    "unicorn/filename-case": ["deny", { case: "kebabCase" }],
    "unicorn/max-nested-calls": "deny",
  },
});
