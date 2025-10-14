import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'ReactComponentLibrary',
			fileName: (format) => `index.${format}.js`,
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'react/jsx-runtime',
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
});
