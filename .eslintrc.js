module.exports = {
  root: true,
  extends: [
    './config/eslint/typescript/.eslintrc.js',
    './config/eslint/prettier/.eslintrc.js'
  ].map(require.resolve),
  rules: {},
  ignorePatterns: ['toastui-calendar.mjs', '/dist/*']
};
