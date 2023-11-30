module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'object-curly-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
  },
};
