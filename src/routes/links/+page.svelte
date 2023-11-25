<script lang="ts">
	import ImageHeader from '$lib/ImageHeader.svelte';
	import Links from '$lib/Links.svelte';
	import type { PageData } from './$types';
	import warning from '$assets/warning.gif';
	import globe from '$assets/globe.gif';
	import system from '$assets/icon/system.gif';
	export let data: PageData;
</script>

<ImageHeader src={globe}>Handy Links</ImageHeader>
<p>
	<img src={system} alt="" />
	<span>
		There are <b>{data.count} link(s)</b> in the database.
	</span>
</p>
<p>
	This page contains common links that might be handy on a day-to-day basis.<br />
	Put your favourite links here so that you can easily reference them in the future.<br /><br />
	Click <i>Delete</i> to delete any one of the links from the list.
</p>
<Links links={data.links}>
	{#if !data.links.length}
		<tr>
			<td>
				<img src={warning} alt="" />
			</td>
			<td class="name">There are no links registered!</td>
		</tr>
	{/if}
</Links>

<style>
	p * {
		vertical-align: middle;
	}
	p img {
		margin-right: 5px;
	}
</style>
