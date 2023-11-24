import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import url from 'url';
import { getRelativeTree, getTree } from '../../ts/tree';
import Fuse from 'fuse.js';
import { sidebarTitle } from '../../ts/env';
export const load = (async ({ request }) => {
	sidebarTitle.set('Search');
	const query = url.parse(request.url as string, true).query;
	const searchQuery = query.query as string;

	if (!searchQuery) return;

	const start = new Date().getTime();
	try {
		const files = await getTree('fs');
		const fuse = new Fuse(files);
		const search = fuse.search(searchQuery);
		const results = (await getRelativeTree(search.map((r) => r.item))).map((p) => {
			return {
				resolved: p,
				name: p.replaceAll('/download/', '').replaceAll('/fs/', '')
			};
		});

		const end = new Date().getTime();

		return { results, duration: ((end - start) / 1000).toFixed(2) };
	} catch {
		throw error(500, 'Filesystem access failed.');
	}
}) satisfies PageServerLoad;
