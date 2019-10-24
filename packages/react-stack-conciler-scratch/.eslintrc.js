module.exports = {
  root: true,
  extends: ['plugin:xxx-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      ...require('eslint-plugin-xxx-eslint').configs.typescript,
    },
  ],
  settings: {
    polyfills: [],
  },
};
