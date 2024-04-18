<script lang="ts">
	export let path = '';

	const crumbs = path.split('/');

	function generatePath(crumb: string, I: number) {
		let str = '';

		for (let i = 0; i < I; i++) {
			str += `${crumbs[i]}/`;
		}

		return `/fs/${str}${crumb}`;
	}
</script>

<div class="breadcrumbs">
	<a href="/fs" class="crumb">Home</a>
	{#each crumbs as crumb, i}
		<span class="arrow">&gt;</span>
		<a href={generatePath(crumb, i)} class="crumb">{crumb}</a>
	{/each}
</div>

<style>
	div.breadcrumbs {
		margin: 10px 0;
	}
</style>
