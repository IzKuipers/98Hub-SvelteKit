<script lang="ts">
	import ImageHeader from '$lib/ImageHeader.svelte';
	import type { PageData } from './$types';
	import info from '$assets/info.gif';

	export let data: PageData;
</script>

<ImageHeader src={info}>Cortex 98 Information</ImageHeader>
<p>
	Cortex 98 has been constructed to run on legacy devices exclusively. If you're seeing this page on
	a modern device, then the legacy browser detection has failed. Please contact Cortex Support if
	this is the case.
</p>
<p>
	Hosted as part of the Cortex Infrastructure. Built using SvelteKit. Cortex Administration cannot
	be held accountable for a loss of information or the retrieval of malicious software from the
	servers. Use at your own risk.
</p>
<p>Copyright © 1999</p>
<h2>Statistics</h2>
<table>
	<tr>
		<td>File count</td>
		<td>{data.fileCount} files</td>
	</tr>
	<tr>
		<td>Folder count</td>
		<td>{data.dirCount} folders</td>
	</tr>
	<tr>
		<td>Filesystem Size</td>
		<td>{data.sizeFormatted} ({data.size} Bytes)*</td>
	</tr>
	<tr>
		<td>Who am I?</td>
		<td>{data.server}\{data.user}</td>
	</tr>
	<tr>
		<td>Processor count</td>
		<td>{data.processors}</td>
	</tr>
	<tr>
		<td>OS</td>
		<td>{data.os}</td>
	</tr>
</table>

<p>* May not be accurate.</p>

<style>
	td {
		padding-right: 20px;
	}
</style>
