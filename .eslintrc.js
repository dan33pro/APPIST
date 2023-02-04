module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended', // Accesibilidad
    'plugin:prettier/recommende', // Sintaxis
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': ['error', 'always'], // Siempre ; al final
  }
}