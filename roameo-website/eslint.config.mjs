// import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
// import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

import pluginVue from 'eslint-plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:vue/vue3-recommended'),
  ...pluginVue.configs['flat/recommended'],
  {
    // plugins: {
    //   '@typescript-eslint': typescriptEslint,
    // },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      // parser: tsParser,
      // ecmaVersion: 12,
      // sourceType: 'module',

      // parserOptions: {
      //   project: './tsconfig.json',
      // },
    },

    rules: {
      'vue/script-indent': ['error', 2, { baseIndent: 1 }], // For script tag content
      'vue/html-quotes': ['error', 'double'],

      'vue/html-indent': [
        'error',
        // eslint-disable-next-line no-undef
        type,
        {
          baseIndent: 1,
          closeBracket: 0,
          ignores: [],
        },
      ],

      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: [],
        },
      ],
    },
  },
];
