import { lstat, readdir, stat } from 'fs/promises';
import { join } from 'path';

export async function getTree(path: string): Promise<string[]> {
	let result = [];

	const contents = await readdir(path, { encoding: 'utf-8' });

	for (let i = 0; i < contents.length; i++) {
		try {
			const item = contents[i];
			const itemPath = join(path, item);
			const itemStat = await stat(itemPath);

			result.push(itemPath);

			if (itemStat.isDirectory()) {
				result.push(...(await getTree(itemPath)));
				continue;
			}
		} catch {
			continue;
		}
	}

	return result;
}

export async function getRelativeTree(paths: string[]): Promise<string[]> {
	const result = [];

	for (let i = 0; i < paths.length; i++) {
		const stat = await lstat(paths[i]);
		const isDir = stat.isDirectory();
		const resolved = paths[i].replaceAll('\\', '/').replace('fs', isDir ? '/fs' : '/download');
		result.push(resolved);
	}

	return result;
}
