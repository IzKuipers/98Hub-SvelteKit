import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	throw error(400, "Can't download air.");
}) satisfies PageServerLoad;
