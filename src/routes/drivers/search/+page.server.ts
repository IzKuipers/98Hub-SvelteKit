import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import url from 'url';
export const load = (async ({ request }) => {
	const query = url.parse(request.url as string, true).query;

	console.log(query);

	return { query: query['query'] };
}) satisfies PageServerLoad;
