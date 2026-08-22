import { STATUS_CODES } from "node:http";
import { defineConfig } from "oxlint";

const httpStatusCodes = Object.keys(STATUS_CODES).map(Number);

export default defineConfig({
  rules: {
    complexity: "deny",
    "id-length": [
      "deny",
      {
        checkGeneric: false,
        exceptions: ["_", "i", "j", "k", "n", "x", "y", "z"],
        max: 40,
        min: 2,
      },
    ],
    "max-classes-per-file": "deny",
    "max-depth": "deny",
    "max-lines": "deny",
    "max-lines-per-function": "deny",
    "max-nested-callbacks": "deny",
    "max-params": "deny",
    "max-statements": "deny",
    "no-magic-numbers": [
      "deny",
      {
        ignore: [-1, 0, 1, 2, ...httpStatusCodes],
        ignoreArrayIndexes: true,
        ignoreClassFieldInitialValues: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "unicorn/filename-case": ["deny", { case: "kebabCase" }],
    "unicorn/no-array-for-each": "deny",
  },
});
