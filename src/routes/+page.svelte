<script lang="ts">
	import drive from '$assets/icon/drive.gif';
	import system from '$assets/icon/system.gif';
	import Directory from '$lib/Directory.svelte';
	import ImageHeader from '$lib/ImageHeader.svelte';
	import computer from '$assets/globe.gif';
	import ie from '$assets/freeie.gif';
</script>

<ImageHeader src={computer}>Cortex 98</ImageHeader>

<p>
	The Cortex page for Windows 98 systems. This hub has been designed to<br />
	transfer common data to legacy Windows 98 machines that have access to the<br />
	intranet of the Cortex.
</p>

<h3>Quick links</h3>

<Directory>
	<span>
		<img src={drive} alt="" />
		<a href="/fs">Cortex 98 Filesystem</a>
	</span>
	<span>
		<img src={system} alt="" />
		<a href="/info">System Information</a>
	</span>
</Directory>
<br />
<img src={ie} alt="Works with Internet Explorer" />
