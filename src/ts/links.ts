import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

export function getLinkPath(): string {
	return join('.', 'links.json');
}

export async function readLinksFile(): Promise<Link[]> {
	const path = getLinkPath();

	try {
		const text = await readFile(path, 'utf-8');
		const json = JSON.parse(text);

		return json as Link[];
	} catch {
		await writeFile(path, '[]', 'utf-8');

		return [];
	}
}

export async function getLinks(): Promise<Link[]> {
	return await readLinksFile();
}

export async function setLinks(links: Link[]) {
	const path = getLinkPath();

	await writeFile(path, JSON.stringify(links), 'utf-8');
}

export async function deleteLink(link: string): Promise<boolean> {
	const links = await getLinks();

	const exists = !!links.filter((l) => l.url == link).length;

	if (!exists) return false;

	await setLinks(links.filter((a) => a.url != link));

	return true;
}

export async function addLink(name: string, url: string): Promise<boolean> {
	const links = await getLinks();

	const exists = !!links.filter((l) => l.url == url).length;

	if (exists) return false;

	links.push({ name, url });

	await setLinks(links);

	return true;
}
