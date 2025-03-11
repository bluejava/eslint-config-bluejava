import js from '@stylistic/eslint-plugin-js';
import importPlugin from 'eslint-plugin-import';

export default [
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					generators: false,
					objectLiteralDuplicateProperties: false,
				},
			},
			globals: {
				browser: true,
				es6: true,
				es2021: true,
				node: true,
			},
		},
		plugins: {
			'@stylistic/js': js,
			import: importPlugin,
		},
		rules: {
			'@stylistic/js/array-bracket-spacing': [
				'error',
				'never',
			],
			'array-callback-return': 'error',
			'arrow-body-style': [
				'error',
				'as-needed',
			],
			'@stylistic/js/arrow-parens': ['error', 'as-needed'],
			'@stylistic/js/block-spacing': [
				'error',
				'always',
			],
			'@stylistic/js/brace-style': ['error', 'allman', { allowSingleLine: true }],
			'camelcase': 'error',
			'@stylistic/js/comma-dangle': [
				'error',
				{
					arrays: 'always-multiline',
					exports: 'always-multiline',
					functions: 'always-multiline',
					imports: 'always-multiline',
					objects: 'always-multiline',
				},
			],
			'@stylistic/js/comma-spacing': 'error',
			'@stylistic/js/comma-style': 'error',
			'consistent-return': 'error',
			'curly': ['error', 'multi-or-nest'],
			'@stylistic/js/dot-location': [
				'error',
				'property',
			],
			'@stylistic/js/eol-last': ['off'],
			'eqeqeq': [
				'error',
				'always',
				{
					null: 'ignore',
				},
			],
			'for-direction': 'error',
			'@stylistic/js/function-call-spacing': 'error',
			'func-names': 'warn',
			'@stylistic/js/function-paren-newline': 'error',
			'guard-for-in': 'warn',
			'@stylistic/js/implicit-arrow-linebreak': 'error',
			'import/extensions': ['error', 'always', {ignorePackages: true}],
			'import/group-exports': 'error',
			'import/newline-after-import': 'error',
			'import/no-commonjs': 'error',
			'import/no-unresolved': 'error',
			'import/order': [
				'error', {
					'alphabetize': {
						caseInsensitive: true,
						order: 'asc',
					},
					'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'],
					'newlines-between': 'always',
				},
			],
			'import/prefer-default-export': 'error',
			'@stylistic/js/indent': ['error', 'tab'],
			'@stylistic/js/key-spacing': 'error',
			'@stylistic/js/keyword-spacing': ['error', { overrides: {
				if: { after: true },
				for: { after: true },
				while: { after: true },
			} }],
			'@stylistic/js/linebreak-style': [
				'error',
				'unix',
			],
			'no-alert': 'warn',
			'no-await-in-loop': 'error',
			'no-console': 'warn',
			'no-constant-condition': 'warn',
			'no-duplicate-imports': 'error',
			'no-eq-null': 'off',
			'no-eval': 'error',
			'no-extend-native': 'error',
			'@stylistic/js/no-floating-decimal': 'error',
			'no-implied-eval': 'error',
			'no-iterator': 'error',
			'no-labels': 'error',
			'no-lone-blocks': 'error',
			'no-loop-func': 'error',
			'@stylistic/js/no-multi-spaces': 'error',
			'@stylistic/js/no-multiple-empty-lines': [
				'error',
				{
					max: 1,
				},
			],
			'no-new': 'error',
			'no-new-func': 'error',
			'no-new-wrappers': 'error',
			'no-octal-escape': 'error',
			'no-proto': 'error',
			'no-return-assign': 'error',
			'no-return-await': 'error',
			'no-self-assign': [
				'error',
				{
					props: true,
				},
			],
			'no-self-compare': 'error',
			'no-shadow': 'error',
			'@stylistic/js/no-tabs': ['error', { allowIndentationTabs: true }],
			'no-template-curly-in-string': 'error',
			'@stylistic/js/no-trailing-spaces': 'error',
			'no-throw-literal': 'error',
			'no-unused-expressions': 'error',
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					varsIgnorePattern: '_\\d?',
				},
			],
			'no-useless-computed-key': 'error',
			'no-useless-concat': 'error',
			'no-useless-escape': 'error',
			'no-useless-return': 'error',
			'no-var': 'error',
			'no-void': 'error',
			'@stylistic/js/nonblock-statement-body-position': ['error', 'any'],
			'object-shorthand': 'error',
			'operator-assignment': 'error',
			'@stylistic/js/operator-linebreak': [
				'error',
				'after',
				{
					overrides: {
						'=': 'none',
						'?': 'before',
						':': 'before',
					},
				},
			],
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-destructuring': [
				'error', {array: false, object: true},
			],
			'prefer-promise-reject-errors': 'error',
			'prefer-rest-params': 'error',
			'prefer-template': 'error',
			'@stylistic/js/quote-props': [
				'error',
				'consistent-as-needed',
			],
			'@stylistic/js/quotes': [
				'error',
				'single',
				{
					avoidEscape: true,
				},
			],
			'radix': ['error', 'as-needed'],
			'@stylistic/js/rest-spread-spacing': 'error',
			'@stylistic/js/semi': ['error', 'never'],
			'@stylistic/js/semi-style': [
				'error',
				'first',
			],
			'sort-keys': [
				'off',
				'asc',
				{
					caseSensitive: false,
					natural: true,
				},
			],
			'@stylistic/js/space-before-blocks': 'error',
			'@stylistic/js/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					asyncArrow: 'always',
					named: 'never',
				},
			],
			'@stylistic/js/space-in-parens': 'error',
			'@stylistic/js/space-infix-ops': 'error',
			'@stylistic/js/space-unary-ops': 'error',
			'@stylistic/js/spaced-comment': 'error',
			'strict': [
				'error',
				'never',
			],
			'@stylistic/js/switch-colon-spacing': 'error',
			'@stylistic/js/template-curly-spacing': 'error',
			'@stylistic/js/template-tag-spacing': 'error',
			'valid-typeof': [
				'error',
				{
					requireStringLiterals: true,
				},
			],
			'vars-on-top': 'error',
			'@stylistic/js/wrap-iife': 'error',
			// 'yoda' rule is not available in @stylistic/eslint-plugin-js, using core ESLint rule instead
			'yoda': 'error',
		},
	},
];