import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import url from 'url';
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const query = data.get('query');
		return { query };
	}
} satisfies Actions;
