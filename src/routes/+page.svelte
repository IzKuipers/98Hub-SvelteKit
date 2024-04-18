<script lang="ts">
	import findicon from '$assets/findico.gif';
	import computer from '$assets/globe.gif';
	import drive from '$assets/icon/drive.gif';
	import mouse from '$assets/icon/mouse.gif';
	import system from '$assets/icon/system.gif';
	import Badges from '$lib/Badges.svelte';
	import Directory from '$lib/Directory.svelte';
	import ImageHeader from '$lib/ImageHeader.svelte';
	import Links from '$lib/Links.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ImageHeader src={computer}>Cortex 98</ImageHeader>

<p>
	The Cortex page for old Windows systems. This hub has been designed to<br />
	transfer common data to legacy Windows machines that have access to the<br />
	intranet of the Cortex.
</p>

<h3>Quick links</h3>
<Links links={data.links} minimal>
	<tr>
		<td><img src={mouse} alt="" /></td>
		<td><a href="/links">View all...</a></td>
	</tr>
</Links>

<h3>Resources</h3>
<Directory>
	<tr>
		<td>
			<img src={drive} alt="" />
		</td>
		<td>
			<a href="/fs">Cortex 98 Filesystem</a>
		</td>
	</tr>
	<tr>
		<td><img src={findicon} alt="" /></td>
		<td><a href="/search">Search...</a></td>
	</tr>
	<tr>
		<td><img src={system} alt="" /></td>
		<td><a href="/info">System Information</a></td>
	</tr>
</Directory>
<Badges />

<style>
	h3 {
		margin-bottom: 5px;
	}
</style>
