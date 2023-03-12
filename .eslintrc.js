module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // add more generic rulesets here, such as:
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 5
      },      
      "multiline": {
        "max": 3
      }
    }]
  }
}
