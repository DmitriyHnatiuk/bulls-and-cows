import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
	{
		files: ['**/*.{js,ts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-vars': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'no-console': 'error',
		},
	},
	tseslint.configs.recommended,
	prettierConfig,
]);
