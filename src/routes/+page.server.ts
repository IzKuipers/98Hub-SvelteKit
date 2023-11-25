import { getLinks } from '../ts/links';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const links = (await getLinks()).slice(0, 5);

	return { links, count: links.length };
}) satisfies PageServerLoad;
