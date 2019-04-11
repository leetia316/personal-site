module.exports = {
  extends: ['airbnb-base'],
  plugins: ['import', 'jest', 'node', 'promise'],
  rules: {
    'no-unused-vars': 'off',
    quotes: ['error', 'single'],
    semi: 'off',
  },
};
