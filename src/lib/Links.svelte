<script lang="ts">
	import globe from '$assets/icon/globe.gif';
	import warning from '$assets/warning.gif';
	export let links: Link[];
	export let minimal = false;
</script>

<table class="directory">
	{#if links && links.length}
		{#each links as link}
			<tr>
				<td>
					<img src={globe} alt="" />
				</td>
				<td class="name">
					<a href={link.url}>{link.name}</a>
				</td>
				{#if !minimal}
					<td class="name">
						<a href={link.url}>{link.truncated}</a>
					</td>
					<td>
						<form action="/links/delete">
							<input type="hidden" name="url" value={link.url} />
							<button class="delete" type="submit">Delete</button>
						</form>
					</td>
				{/if}
			</tr>
		{/each}
	{:else}
		<tr>
			<td>
				<img src={warning} alt="" />
			</td>
			<td> There are no links here... </td>
		</tr>
	{/if}
	<slot />
</table>
