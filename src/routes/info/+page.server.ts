import { glob } from 'glob';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import getFolderSize from 'get-folder-size';
import { lstat } from 'fs/promises';
import { formatBytes } from '../../ts/bytes';

export const load = (async () => {
	try {
		const globbedFiles = (await glob('fs/**/*.*')).length;
		const globbedAll = (await glob('fs/**/*')).length;
		const folders = globbedAll - globbedFiles;
		const files = globbedFiles;
		const fsSize = await getFolderSize.loose('fs');
		return {
			fileCount: files,
			dirCount: folders,
			size: fsSize,
			total: globbedFiles,
			sizeFormatted: formatBytes(fsSize)
		};
	} catch {
		throw error(500, "Couldn't get server information");
	}
}) satisfies PageServerLoad;
