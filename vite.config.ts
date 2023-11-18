import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.GIF', '**/*.gif'],
	build: {
		assetsInlineLimit: 0
	}
});
