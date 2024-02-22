import { error } from '@sveltejs/kit';
import { lstat, readdir } from 'fs/promises';
import { join, resolve } from 'path';
import { join as joinPosix } from 'path/posix';
import { formatBytes } from '../../../ts/bytes';
import { sidebarTitle } from '../../../ts/env';
import type { PageServerLoad } from './$types';
export const load = (async ({ params }) => {
	const path = resolve('fs', params.path);

	try {
		const contents = await readdir(path, { withFileTypes: true });

		const dirs = [];
		const files = [];

		for (let i = 0; i < contents.length; i++) {
			const name = contents[i].name;
			const item = join(path, name);
			const stat = await lstat(item);
			const isDir = stat.isDirectory();
			const size = isDir ? 0 : stat.size;
			const resolved = `/${joinPosix(isDir ? `fs` : `download`, params.path, name)}`;

			if (isDir) {
				dirs.push({ resolved, name });

				continue;
			}

			files.push({ resolved, name, size, sizeStr: formatBytes(size) });
		}

		const split = params.path.split('/');
		const dirName = split[split.length - 1];

		sidebarTitle.set(dirName);

		return {
			files,
			dirs,
			path: params.path,
			name: dirName,
			parent: `/${joinPosix(`fs`, params.path, '..')}`
		};
	} catch {
		throw error(404, 'Directory not found!');
	}
	/* return { path: params.path }; */
}) satisfies PageServerLoad;
