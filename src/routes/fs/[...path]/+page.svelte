<script lang="ts">
	import Directory from '$lib/Directory.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Contents of {data.path}</h1>

<Directory dirs={data.dirs} files={data.files} parent={data.parent} />
