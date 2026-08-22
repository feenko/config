# @fnko/config

## 0.4.0

### Minor Changes

-  Add unicorn/no-array-for-each to strict ruleset
-  Add max-statements to strict ruleset
-  Enforce node/no-process-env globally in SvelteKit ruleset
-  Add unicorn/no-nested-ternary to core ruleset
-  Add no-multi-str to core ruleset
-  Add sort-imports to core ruleset

### Patch Changes

-  Remove duplicate ban-ts-comment and max-nested-calls from strict ruleset
-  Remove id-length override from the SvelteKit ruleset
-  Exempt generic type parameters and underscore from id-length

## 0.3.0

### Minor Changes

-  Add SvelteKit ruleset

### Patch Changes

-  Remove func-style
-  Remove no-map-spread
-  Ignore HTTP status codes in no-magic-numbers
-  Allow CSS imports in no-unassigned-import
-  Remove prefer-readonly-parameter-types

## 0.2.0

### Minor Changes

-  Extend strict ruleset
-  Rewrite core ruleset
-  Extend typed ruleset

### Patch Changes

-  Pin oxlint to 1.77.0
-  Add missing plugin prefixes
-  Add jsdoc ruleset
