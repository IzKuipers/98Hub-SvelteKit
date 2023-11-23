<script lang="ts">
	import bullet from '$assets/bullet5.gif';
	const pages: Record<string, string> = {
		'/': 'Home',
		'/fs': 'Filesystem',
		'/search': 'Search Files',
		'/tweaks': 'Tweaks',
		'/info': 'Information'
	};
</script>

<div class="navigation">
	{#each Object.entries(pages) as [path, caption]}
		<div class="link">
			<img src={bullet} alt="" />
			<a href={path}>
				{caption}
			</a>
		</div>
	{/each}
</div>

<style>
	div.navigation {
		padding: 0 8px;
	}
	div.link * {
		vertical-align: middle;
	}

	div.link {
		margin-bottom: 4px;
		display: block;
	}

	div.link img {
		margin-right: 5px;
		height: 13px;
	}
</style>
