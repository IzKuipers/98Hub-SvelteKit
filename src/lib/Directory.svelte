<script lang="ts">
	export let dirs: FsDir[] = [];
	export let files: FsFile[] = [];
	export let searches: FsItem[] = [];
	export let parent: string = '';
	export let root = false;

	import folder from '$assets/icon/folder.gif';
	import appfolder from '$assets/icon/appfolder.gif';
	import fileIcon from '$assets/icon/file.gif';
	import searchIcon from '$assets/result.gif';
</script>

<table class="directory">
	{#if parent}
		<tr>
			<td>
				<img src={folder} alt="" />
			</td>
			<td>
				<a href={parent}>..</a>
			</td>
			<td>&lt;PARENT&gt;</td>
		</tr>
	{/if}
	{#each searches as search}
		<tr>
			<td>
				<img src={searchIcon} alt="" />
			</td>
			<td class="name">
				<a href={search.resolved}>{search.name}</a>
			</td>
		</tr>
	{/each}
	{#each dirs as dir}
		<tr>
			<td>
				<img src={root ? appfolder : folder} alt="" />
			</td>
			<td class="name">
				<a href={dir.resolved}>{dir.name}/</a>
			</td>
			<td>&lt;DIR&gt;</td>
		</tr>
	{/each}
	{#each files as file}
		<tr>
			<td>
				<img src={fileIcon} alt="" />
			</td>
			<td class="name">
				<a href={file.resolved}>{file.name}</a>
			</td>
			<td>{file.sizeStr}</td>
		</tr>
	{/each}
	<slot />
</table>
