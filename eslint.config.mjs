import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginPrettier from "eslint-plugin-prettier";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs("flat/recommended"),
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-unused-vars": ["error", { vatsIgnorePattern: "^[A-Z]" }],
      quotes: ["error", "signle"],
      "tailwindcss/classname-order": "off",
    },
  },

  pluginPrettier,
]);

export default eslintConfig;
