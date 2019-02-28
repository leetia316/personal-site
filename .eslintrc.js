module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ['import', 'node', 'promise'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { 'code': 120 }],
    'no-console': ['warn', { allow: ['warn', 'error']}],
    'no-unresolved': ['off'],
    'no-return-assign': 'off',
    quotes: ['error', 'single'],
    semi: 'off',
    'space-before-function-paren': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'vue/script-indent': ['warn', 2, { baseIndent: 1 }]
  },
};
