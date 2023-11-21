<script lang="ts">
	import Directory from '$lib/Directory.svelte';
	import ImageHeader from '$lib/ImageHeader.svelte';
	import type { PageData } from './$types';
	import computer from '$assets/computer.gif';

	export let data: PageData;
</script>

<ImageHeader src={computer}>{data.name}</ImageHeader>

<Directory dirs={data.dirs} files={data.files} parent={data.parent} />
