<script lang="ts">
	import { page } from '$app/stores';
	import info from '$assets/icon/info.gif';
	import ImageHeader from '$lib/ImageHeader.svelte';
</script>

<ImageHeader src={info}>The page cannot be displayed</ImageHeader>
<p>
	The page you are looking for is currently unavailable. The Web<br />
	site might be experiencing technical difficulties, or you may need<br />
	to adjust your browser settings.
</p>
<h3>Technical information</h3>
<table class="technical">
	<tr>
		<td>Status Code:</td>
		<td>{$page.status}</td>
	</tr>
	<tr>
		<td>Error Message:</td>
		<td>{$page.error?.message}</td>
	</tr>
	<tr>
		<td>Page URL:</td>
		<td>{$page.url}</td>
	</tr>
</table>

<style>
	table {
		border-collapse: collapse;
	}
	h1 {
		font: 13pt/15pt Verdana;
	}

	h1 * {
		vertical-align: middle;
	}

	h1 img {
		width: 25px;
		height: 33px;
		margin-right: 8px;
	}

	td {
		border-spacing: 0;
		padding: 0;
		padding-right: 20px;
		padding-bottom: 5px;
	}
</style>
