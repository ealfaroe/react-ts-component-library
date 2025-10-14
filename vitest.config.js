import react from "@vitejs/plugin-react";
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/setupTests.ts",
		include: ["src/**/*.test.{ts,tsx}"],
		exclude: ["node_modules", "dist", ".ladle"],
		coverage: {
			reporter: ["text", "html"],
			exclude: ["**/*.stories.{ts,tsx}", "**/*.test.{ts,tsx}", "src/setupTests.ts"]
		}
	},
});
