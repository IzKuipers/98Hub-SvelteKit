<script lang="ts">
	import Directory from '$lib/Directory.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	import hourglass from '$assets/hourglass.gif';
	import warning from '$assets/warning.gif';
	import ImageHeader from '$lib/ImageHeader.svelte';
</script>

{#if data.results}
	<p>
		<img src={data.results.length < 100 ? hourglass : warning} alt="" />
		<span>
			Found {data.results.length} results for <b>{data.query}</b> in {data.duration}
			seconds.
			{#if data.results.length > 100}
				There are more than 100 results! I don't display more than 100 items. Try being a bit more
				specific.
			{/if}
		</span>
	</p>

	<Directory searches={data.results} />
{:else}
	<p>
		Enter a search query above to search the Cortex 98 filesystem for files and folders with that
		name.
	</p>
{/if}

<style scoped>
	p * {
		vertical-align: middle;
	}
	p img {
		margin-right: 5px;
	}
</style>
