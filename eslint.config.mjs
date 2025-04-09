import eslint from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { flatConfigs } from "eslint-plugin-import-x";
import { config, configs as tsConfigs } from "typescript-eslint";

const ESLintConfig = config(
  eslint.configs.recommended,
  ...tsConfigs.recommended,
  flatConfigs.recommended,
  flatConfigs.typescript,
  {
    ignores: ["node_modules", "build"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2024,
      sourceType: "module",

      parserOptions: {
        project: "./tsconfig.json",

        ecmaFeatures: {
          arrowFunctions: true,
        },
      },
    },
    rules: {
      // Warning for unused variables
      "@typescript-eslint/no-unused-vars": "warn",
      // Prefer const over let
      "prefer-const": "warn",
      // Prefer arrow functions
      "func-style": ["warn", "expression"],
      // Consistent usage of type over interface
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      // Module import sorting and grouping
      "import-x/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "@app/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["@app/**"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      // Additional rules for TypeScript and Node.js
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "no-console": "warn",
      "no-unused-expressions": "warn",
    },
  }
);

export default ESLintConfig;
