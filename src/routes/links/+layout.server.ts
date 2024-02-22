import { innerClass } from '../../ts/env';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	innerClass.set('page-links');
	return {};
}) satisfies LayoutServerLoad;
