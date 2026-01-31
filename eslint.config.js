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
        ...globals.browser, // 允许使用 localStorage, window, console 等浏览器全局变量
        ...globals.node,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off", // 允许单单词组件名，如 Home.vue
      "no-unused-vars": "warn",               // 允许存在未使用的变量但报警告
      "no-console": "off",                    // 允许使用 console.log
      "vue/require-default-prop": "off",      // 如果不想给每个 prop 写 default，可以关掉这个
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
