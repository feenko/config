import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    "prefer-promise-reject-errors": "off",
    "require-await": "off",
    "typescript/no-confusing-void-expression": "deny",
    "typescript/no-deprecated": "deny",
    "typescript/no-misused-promises": "deny",
    "typescript/no-mixed-enums": "deny",
    "typescript/no-unnecessary-condition": [
      "deny",
      { allowConstantLoopConditions: "only-allowed-literals" },
    ],
    "typescript/no-unsafe-argument": "deny",
    "typescript/no-unsafe-assignment": "deny",
    "typescript/no-unsafe-call": "deny",
    "typescript/no-unsafe-member-access": "deny",
    "typescript/no-unsafe-return": "deny",
    "typescript/only-throw-error": "deny",
    "typescript/prefer-includes": "deny",
    "typescript/prefer-nullish-coalescing": "deny",
    "typescript/prefer-optional-chain": ["deny", { requireNullish: true }],
    "typescript/prefer-promise-reject-errors": "deny",
    "typescript/related-getter-setter-pairs": "deny",
    "typescript/require-await": "deny",
    "typescript/restrict-plus-operands": "deny",
    "typescript/return-await": "deny",
    "typescript/strict-void-return": "deny",
    "typescript/switch-exhaustiveness-check": "deny",
  },
});
