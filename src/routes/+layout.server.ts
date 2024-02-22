import { error } from '@sveltejs/kit';
import { innerClass, sidebarTitle } from '../ts/env';
import type { LayoutServerLoad } from './$types';

const UA_REQUIRED = ['windows', 'msie'];

export const load = (async ({ request }) => {
	sidebarTitle.set('');
	innerClass.set('');

	const userAgent = request.headers.get('user-agent');
	const lowercase = userAgent?.toLowerCase();
	const data = { ua: userAgent };

	if (import.meta.env.DEV) return data;

	for (let i = 0; i < UA_REQUIRED.length; i++) {
		if (!lowercase?.includes(UA_REQUIRED[i]))
			throw error(
				403,
				"Your browser doesn't contain the required UserAgent strings. Cortex 98 requires Windows 98 and Internet Explorer."
			);
	}

	return data;
}) satisfies LayoutServerLoad;
