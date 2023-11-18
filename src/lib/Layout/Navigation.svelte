<script lang="ts">
	import bullet from '$assets/bullet5.gif';
	const pages: Record<string, string> = {
		'/': 'Home',
		'/fs': 'Filesystem',
		'/info': 'Information'
	};
</script>

<div class="navigation">
	{#each Object.entries(pages) as [path, caption]}
		<span class="link">
			<img src={bullet} alt="" />
			<a href={path}>
				{caption}
			</a>
		</span>
	{/each}
</div>

<style>
	span.link * {
		vertical-align: middle;
	}

	span.link img {
		margin-right: 5px;
		height: 13px;
	}
</style>
