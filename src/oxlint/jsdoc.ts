import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["jsdoc"],
  rules: {
    "jsdoc/check-access": "deny",
    "jsdoc/empty-tags": "deny",
    "jsdoc/require-param": "deny",
    "jsdoc/require-param-description": "deny",
    "jsdoc/require-param-name": "deny",
    "jsdoc/require-param-type": "deny",
    "jsdoc/require-returns": "deny",
    "jsdoc/require-returns-description": "deny",
    "jsdoc/require-returns-type": "deny",
    "jsdoc/require-throws-description": "deny",
    "jsdoc/require-throws-type": "deny",
    "jsdoc/require-yields-description": "deny",
    "jsdoc/require-yields-type": "deny",
  },
});
