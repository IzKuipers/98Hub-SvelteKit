import { error } from '@sveltejs/kit';
import { existsSync } from 'fs';
import { lstat, readFile } from 'fs/promises';
import { basename, resolve } from 'path';
import type { RequestHandler } from './$types';
import mime from 'mime';
export const GET: RequestHandler = async ({ params }) => {
	const path = resolve('fs', params.path);

	if (!existsSync(path)) throw error(404, 'File not found');

	try {
		const isFile = (await lstat(path)).isFile();
		const filename = basename(path);
		const mimetype = mime.getType(path) || 'application/octet-stream';

		if (!isFile) throw error(400, "Can't download a directory, you silly goof");

		return new Response(await readFile(path), {
			headers: {
				'Content-Disposition': `attachment; filename="${filename}"`,
				'Content-Type': mimetype
			}
		});
	} catch (e) {
		throw e || error(404, 'File not found');
	}
};
