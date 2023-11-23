import type { LayoutServerLoad } from './$types';
import url from 'url';

export const load = (async ({ request }) => {
	const query = url.parse(request.url as string, true).query;
	return { query: query.query || '' };
}) satisfies LayoutServerLoad;
