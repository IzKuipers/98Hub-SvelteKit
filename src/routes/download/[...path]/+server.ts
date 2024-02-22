import { error } from '@sveltejs/kit';
import { existsSync } from 'fs';
import { lstat, readFile } from 'fs/promises';
import { resolve } from 'path';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const path = resolve('fs', params.path);

	if (!existsSync(path)) throw error(404, 'File not found');

	try {
		const isFile = (await lstat(path)).isFile();

		if (!isFile) throw error(400, "Can't download a directory, you silly goof");

		return new Response(await readFile(path));
	} catch (e) {
		throw e || error(404, 'File not found');
	}
};
