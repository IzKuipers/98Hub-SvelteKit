<script lang="ts">
	export let dirs: { resolved: string; name: string }[] = [];
	export let files: { resolved: string; name: string }[] = [];
	export let parent: string = '';
	export let root = false;

	import folder from '$assets/icon/folder.gif';
	import appfolder from '$assets/icon/appfolder.gif';
	import fileIcon from '$assets/icon/file.gif';
</script>

<div class="directory">
	{#if parent}
		<span>
			<img src={folder} alt="" />
			<a href={parent}>..</a>
		</span>
	{/if}
	{#each dirs as dir}
		<span>
			<img src={root ? appfolder : folder} alt="" />
			<a href={dir.resolved}>{dir.name}/</a>
		</span>
	{/each}
	{#each files as file}
		<span>
			<img src={fileIcon} alt="" />
			<a href={file.resolved}>{file.name}</a>
		</span>
	{/each}
	<slot />
</div>
