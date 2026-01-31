import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // 解决 router/index.js 中 localStorage 的报错
        ...globals.node,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "warn", // 将未使用变量设为警告而非错误，避免卡住提交
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];