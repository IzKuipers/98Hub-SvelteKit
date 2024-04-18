<script lang="ts">
	import computer from '$assets/computer.gif';
	import BreadCrumbs from '$lib/BreadCrumbs.svelte';
	import Directory from '$lib/Directory.svelte';
	import ImageHeader from '$lib/ImageHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ImageHeader src={computer}>{data.name}</ImageHeader>
<BreadCrumbs path={data.path} />
<Directory dirs={data.dirs} files={data.files} parent={data.parent} />
