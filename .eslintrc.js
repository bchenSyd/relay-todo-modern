module.exports = {
  extends: [
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: [
    "import",
    "flowtype"
  ]
}