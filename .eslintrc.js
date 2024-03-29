module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }],
  plugins: ['import', 'node', 'promise', 'vue'],
  rules: {
    'global-require': 'off',
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
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never",
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": {
        "max": 1,
      }
    }],
    'vue/no-v-html': 'off',
    'vue/script-indent': ['warn', 2, { baseIndent: 1 }]
  },
};
