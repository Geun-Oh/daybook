import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import babel from "vite-plugin-babel";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    svgr(),
    tsconfigPaths(),
    react({ jsxImportSource: "@emotion/react" }),
  ],
});
