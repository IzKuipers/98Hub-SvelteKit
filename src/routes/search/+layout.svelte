<script lang="ts">
	import ImageHeader from '$lib/ImageHeader.svelte';
	import type { LayoutData } from './$types';
	import searchIcon from '$assets/search.gif';

	export let data: LayoutData;
</script>

<ImageHeader src={searchIcon}>
	<form action="/search">
		<input type="text" name="query" value={data.query} />
		<button type="submit">Search</button>
	</form>
</ImageHeader>
<slot />

<style>
	form {
		display: inline;
	}

	form * {
		vertical-align: middle;
	}

	form input {
		height: 22px;
		margin-right: 5px;
		width: 300px;
	}
</style>
