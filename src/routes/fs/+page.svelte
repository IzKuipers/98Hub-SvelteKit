<script lang="ts">
	import Directory from '$lib/Directory.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Filesystem</h1>
<p>Select one of the below folders:</p>

<Directory dirs={data.dirs} root />
