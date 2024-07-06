import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import i18next from "i18next";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      i18next,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "plugin:react/jsx-runtime": "off",
      "no-unused-vars": "warn",
    },
    settings: {
      "react": {
        "version": "detect"
      }
    }
  }
];