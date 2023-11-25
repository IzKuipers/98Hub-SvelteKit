import { error } from '@sveltejs/kit';
import { getLinks } from '../../ts/links';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	try {
		const links = await getLinks();

		console.log(links);

		return { links, count: links.length };
	} catch (e) {
		throw error(500, "Can't get links");
	}
}) satisfies PageServerLoad;
