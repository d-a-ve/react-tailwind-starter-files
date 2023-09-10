module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    semi: 'off',
    'no-tabs': 'off',
    quotes: 'off',
    'space-before-function-paren': 'off',
    indent: 'off',
    'comma-dangle': 'off',
  },
  globals: {
    Edit: 'writable',
    console: 'writable',
    _: 'writable',
    $: 'writable',
  },
};
