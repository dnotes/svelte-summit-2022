import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml'
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(),yaml()]
};

export default config;
