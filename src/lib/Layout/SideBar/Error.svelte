<script lang="ts">
	import { page } from '$app/stores';
</script>

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
