import url from 'url';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ request }) => {
	const query = url.parse(request.url as string, true).query;
	return { query: query.query || '' };
}) satisfies LayoutServerLoad;
