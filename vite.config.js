import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
import builtins from 'builtin-modules';

export default defineConfig({
	plugins: [],
	build: {
		rollupOptions: {
			external: [
				'obsidian',
				'electron',
				'@codemirror/autocomplete',
				'@codemirror/collab',
				'@codemirror/commands',
				'@codemirror/language',
				'@codemirror/lint',
				'@codemirror/search',
				'@codemirror/state',
				'@codemirror/view',
				'@lezer/common',
				'@lezer/highlight',
				'@lezer/lr',
				'sharp',
				...builtins,
			],
			output: {
				banner: `/*
THIS IS A GENERATED/BUNDLED FILE BY VITE
if you want to view the source, please visit the github repository of this plugin
*/`,
				format: 'cjs',
				sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline',
			},
		},
		target: 'es2018',
		minify: process.env.NODE_ENV === 'production',
	},
	define: {
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
	},
});