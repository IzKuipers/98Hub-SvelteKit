import { error } from '@sveltejs/kit';
import { lstat, readFile, readdir } from 'fs/promises';
import { join, resolve } from 'path';
import { join as joinPosix } from 'path/posix';
import { formatBytes } from '../../ts/bytes';
import { sidebarTitle } from '../../ts/env';
import type { PageServerLoad } from './$types';
export const load = (async ({ params }) => {
	const path = resolve('fs');

	try {
		const contents = await readdir(path, { withFileTypes: true });

		const dirs: FsDir[] = [];
		const files: FsFile[] = [];

		for (let i = 0; i < contents.length; i++) {
			const name = contents[i].name;
			const item = join(path, name);
			const isDir = (await lstat(item)).isDirectory();
			const resolved = joinPosix(`/${isDir ? 'fs' : 'download'}`, name);

			if (isDir) {
				dirs.push({ resolved, name });

				continue;
			}

			const text = await readFile(item, 'utf-8');

			files.push({ resolved, name, size: text.length, sizeStr: formatBytes(text.length) });
		}

		sidebarTitle.set('Filesystem');

		return { files, dirs };
	} catch {
		throw error(404, 'Directory not found!');
	}
}) satisfies PageServerLoad;
