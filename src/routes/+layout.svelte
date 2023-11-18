<script lang="ts">
	import Navigation from '$lib/Layout/Navigation.svelte';
	import Title from '$lib/Layout/Title.svelte';
	import '../css/app.css';
</script>

<div class="page">
	<div class="content">
		<slot />
	</div>
</div>
<div class="bottom">
	<Title />
	<Navigation />
</div>
