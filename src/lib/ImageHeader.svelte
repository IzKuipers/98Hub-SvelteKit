<script lang="ts">
	export let src: string;
</script>

<h1>
	<img {src} alt="" />
	<span><slot /></span>
</h1>

<style>
	h1 * {
		vertical-align: middle;
	}

	h1 img {
		margin-right: 8px;
	}
</style>
