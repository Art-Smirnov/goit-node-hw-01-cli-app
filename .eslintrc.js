module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['off', 'always'],
    quotes: ['off', 'double'],
    'comma-dangle': 'off',
    'space-before-function-paren': 0,
  },
};
