const { resolve } = require("./webpack/utils");

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  globals: {
    process: true,
    require: true,
  },
  extends: ["plugin:vue/essential", "eslint-config-airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    //强制数组元素间出现换行
    "array-element-newline": ["error", { multiline: true }],
    //在数组开括号后和闭括号前强制换行
    "array-bracket-newline": ["error", { multiline: true }],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never",
        json: "never",
      },
    ],
    // 禁止使用 console，提醒开发者，上线时要去掉
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    // 禁止 debugger 语句，提醒开发者，上线时要去掉
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    "vue/html-indent": [2, 2],
    "vue/max-attributes-per-line": 0,
    "vue/require-default-prop": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/attributes-order": 2,
    "vue/order-in-components": 2,
    "vue/this-in-template": 2,
    "vue/multi-word-component-names": 0,
    "vue/script-indent": [
      2,
      2,
      {
        switchCase: 1,
      },
    ],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: resolve("webpack/webpack.dev.js"),
      },
    },
  },
};
