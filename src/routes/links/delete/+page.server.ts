import { redirect } from '@sveltejs/kit';
import urlLib from 'url';
import { deleteLink } from '../../../ts/links';
import type { PageServerLoad } from './$types';
export const load = (async ({ request }) => {
	const query = urlLib.parse(request.url as string, true).query;

	const { url } = query as Record<string, string>;

	if (!url) throw redirect(300, '/links');

	const added = await deleteLink(url);

	if (!added) throw redirect(300, '/links');

	throw redirect(300, '/links');
}) satisfies PageServerLoad;
