import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import urlLib from 'url';
import { addLink } from '../../../ts/links';
export const load = (async ({ request }) => {
	const query = urlLib.parse(request.url as string, true).query;

	const { url, name } = query as Record<string, string>;

	if (!url || !name) throw redirect(300, '/links');

	const added = await addLink(name, url);

	if (!added) throw redirect(300, '/links');

	throw redirect(300, '/links');
}) satisfies PageServerLoad;
