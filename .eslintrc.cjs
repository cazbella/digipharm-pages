module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    // Add other necessary extensions here
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    // Rules from the first configuration
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-console': 'off',
    'eol-last': 'error',
    'block-spacing': 'error',
    'vars-on-top': 'error',
    'no-useless-return': 'error',
    'no-useless-escape': 'error',
    'no-lone-blocks': 'error',
    'no-empty': 'error',
    'camelcase': 'error',
    'linebreak-style': 'error',
    'semi': 'error',
    'no-empty-function': 'off',
    'no-whitespace-before-property': 'error',
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    'no-duplicate-imports': 'error',
    'react/jsx-key': 'off',
    'react/prop-types': 'off',
    'eslint no-new': 'off',
    'no-empty-interface': 'off',
    'eslint no-tabs': [{ allowIndentationTabs: false }],
    'eslint no-mixed-spaces-and-tabs': 'off',
    // Rules from the second configuration
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Add and adjust rules from both configurations
  },
};
