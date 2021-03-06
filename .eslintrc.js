module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-console': 'warn',
    'no-plusplus': 'off',
    'linebreak-style': 'off',
    'no-nested-ternary': 'off',
    'react/self-closing-comp': 'warn',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off'
  }
};
