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
    'plugin:prettier/recommended', // Sintaxis
    'next',
    'next/core-web-vitals',
  ],
};
