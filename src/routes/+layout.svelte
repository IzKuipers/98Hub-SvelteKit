<script lang="ts">
	import Navigation from '$lib/Layout/Navigation.svelte';
	import Title from '$lib/Layout/Title.svelte';
	import '../css/app.css';
</script>

<table cellpadding="0" cellspacing="0" class="main">
	<tr class="toprow">
		<td class="page" colspan="2">
			<div class="content">
				<slot />
			</div>
		</td>
	</tr>
	<tr class="bottomrow">
		<Navigation />
		<Title />
	</tr>
</table>
