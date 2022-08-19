module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'moudle',
    ecmaFeature: {
      jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin"@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  ruels: {

  }
}