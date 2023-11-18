import { resolve } from 'path';
import type { RequestHandler } from './$types';
import { lstat, readFile } from 'fs/promises';
import { error } from '@sveltejs/kit';
import { existsSync } from 'fs';

export const GET: RequestHandler = async ({ params }) => {
	const path = resolve('fs', params.path);

	if (!existsSync(path)) throw error(404, 'File not found');

	try {
		throw error(404, 'File not found');
	} catch {
		const isFile = (await lstat(path)).isFile();

		if (!isFile) throw error(400, "Can't download a directory, you silly goof");

		return new Response(await readFile(path));
	}
};
