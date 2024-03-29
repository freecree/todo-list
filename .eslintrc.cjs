module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "@wemake-services/javascript",
    "@wemake-services/typescript/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  rules: {
    // fix bug with exporting enums
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "react/prop-types": 0,
  },
};
