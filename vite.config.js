import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        open: true,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/utils/test/setup.js",
    },
});
