<script lang="ts">
	export let src: string;
	export let id: string = 'ImageHeader';
</script>

<h1 {id}>
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
