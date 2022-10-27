import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
		fs: {
			allow: ['studio']
		}
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	}
};

export default config;
