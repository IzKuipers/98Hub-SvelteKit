import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { join, resolve } from 'path';
import { lstat, readdir } from 'fs/promises';
import { join as joinPosix } from 'path/posix';
export const load = (async ({ params }) => {
	const path = resolve('fs');

	try {
		const contents = await readdir(path, { withFileTypes: true });

		const dirs = [];
		const files = [];

		for (let i = 0; i < contents.length; i++) {
			const name = contents[i].name;
			const item = join(path, name);
			const isDir = (await lstat(item)).isDirectory();
			const resolved = joinPosix(`fs`, name);

			if (isDir) {
				dirs.push({ resolved, name });

				continue;
			}

			files.push({ resolved, name });
		}

		return { files, dirs };
	} catch {
		throw error(404, 'Directory not found!');
	}
	/* return { path: params.path }; */
}) satisfies PageServerLoad;
