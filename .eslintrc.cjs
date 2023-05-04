/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    jasmine: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-use-before-define': 'off',
  },
  settings: {},
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'migrations/*.ts',
    'generated-*.ts',
    'dist/*',
    'node_modules/*',
    'dev/*',
    'e2e/*',
    'gulpfile.ts',
  ],
};
