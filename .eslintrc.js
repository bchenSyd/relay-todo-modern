module.exports = {
  env: {
    browser: true,
    node: true, // understand require keyword;
    es6: true, // Promise is undefined
    jest: true
  },
  parser: "babel-eslint",
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import'],
  rules: {
    // need to explicitly add rules;
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'no-console':'off',
    'no-debugger':'off'
  },
};
