import { innerClass } from '../../ts/env';
import { getLinks } from '../../ts/links';
import sleep from '../../ts/sleep';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	innerClass.set('page-links');
	return {};
}) satisfies LayoutServerLoad;
