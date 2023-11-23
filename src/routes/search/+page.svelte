<script lang="ts">
	import Directory from '$lib/Directory.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	import hourglass from '$assets/hourglass.gif';
</script>

{#if data.results}
	<p>
		<img src={hourglass} alt="" />
		<span>
			Found {data.results.length} results for <b>{data.query}</b> in {data.duration}
			seconds.
		</span>
	</p>
	<Directory searches={data.results} />
{:else}
	<p>
		Enter a search query above to search the Cortex 98 filesystem for files and folders with that
		name.
	</p>
{/if}

<style>
	p * {
		vertical-align: middle;
	}
</style>
