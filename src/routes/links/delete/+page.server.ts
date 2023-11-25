import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import urlLib from 'url';
import { addLink, deleteLink } from '../../../ts/links';
export const load = (async ({ request }) => {
	const query = urlLib.parse(request.url as string, true).query;

	const { url } = query as Record<string, string>;

	if (!url) throw redirect(300, '/links');

	const added = await deleteLink(url);

	if (!added) throw redirect(300, '/links');

	throw redirect(300, '/links');
}) satisfies PageServerLoad;
