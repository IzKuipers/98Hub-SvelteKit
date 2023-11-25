<script lang="ts">
	import globe from '$assets/icon/globe.gif';
	export let links: Link[];
</script>

<table class="directory">
	{#if links}
		{#each links as link}
			<tr>
				<td>
					<img src={globe} alt="" />
				</td>
				<td class="name">
					<a href={link.url}>{link.name}</a>
				</td>
				<td class="name">
					<a href={link.url}>{link.url}</a>
				</td>
				<td>
					<form action="/links/delete">
						<input type="hidden" name="url" value={link.url} />
						<button class="delete" type="submit">Delete</button>
					</form>
				</td>
			</tr>
		{/each}
	{/if}
	<slot />
</table>
