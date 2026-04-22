import react from "@vitejs/plugin-react";
/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@styles': path.resolve(__dirname, './src/theme'),
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/setupTests.ts",
	},
});
