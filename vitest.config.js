import react from "@vitejs/plugin-react";
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/setupTests.ts",
	},
});
