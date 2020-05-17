module.exports = {
  extends: [
    'react-app',
    'plugin:compat/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
