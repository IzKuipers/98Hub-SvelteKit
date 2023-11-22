<script lang="ts">
	import computer from '$assets/globe.gif';
	import drive from '$assets/icon/drive.gif';
	import system from '$assets/icon/system.gif';
	import tweaks from '$assets/tweaks.gif';
	import drivers from '$assets/icon/newhw.gif';
	import Badges from '$lib/Badges.svelte';
	import Directory from '$lib/Directory.svelte';
	import ImageHeader from '$lib/ImageHeader.svelte';
</script>

<ImageHeader src={computer}>Cortex 98</ImageHeader>

<p>
	The Cortex page for Windows 98 systems. This hub has been designed to<br />
	transfer common data to legacy Windows 98 machines that have access to the<br />
	intranet of the Cortex.
</p>

<h3>Quick links</h3>

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
		<td><img src={drivers} alt="" /></td>
		<td><a href="/drivers">Drivers</a></td>
	</tr>
	<tr>
		<td><img src={tweaks} alt="" /></td>
		<td><a href="/tweaks">Tweaks</a></td>
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
