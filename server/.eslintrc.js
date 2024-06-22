module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module"
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: [
		"plugin:@typescript-eslint/recommended"
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"indent": "off",
		'@typescript-eslint/indent': ['error', 'tab'
			, {
			"ignoredNodes": [
				"FunctionExpression > .params[decorators.length > 0]",
				"FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
				"ClassBody.body > PropertyDefinition[decorators.length > 0] > .key"
			]
		}],
		"no-console": "error",
		"object-curly-spacing": ["error", "always"],
		"comma-dangle": ["error", "always"],
	}
};
