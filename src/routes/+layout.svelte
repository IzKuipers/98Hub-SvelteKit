<script lang="ts">
	import wvleft from '../assets/wvleft.gif';
	import wvline from '../assets/wvline.gif';
	import c98 from '../assets/c98.gif';
	import '../css/app.css';
	import { page } from '$app/stores';
	import Navigation from '$lib/Layout/Navigation.svelte';
</script>

<div class="page">
	<div id="Panel" style="background: white URL({wvleft}) no-repeat">
		<p class="image">
			<img src={c98} alt="" width="32" height="32" />
		</p>

		<p class="Title">Cortex 98</p>

		<p class="LogoLine">
			<img src={wvline} width="100%" height="1px" alt="" />
		</p>
		<p class="Links">Select a page to get where you want to go.</p>
		<Navigation />
		{#if $page.status != 200}
			<p>{$page.url}</p>
			<table class="error">
				<tr>
					<td>Status:</td>
					<td>{$page.status}</td>
				</tr>
				<tr>
					<td>Error:</td>
					<td>{$page.error?.message}</td>
				</tr>
			</table>
		{/if}
	</div>
	<div id="Content">
		<slot />
	</div>
</div>
