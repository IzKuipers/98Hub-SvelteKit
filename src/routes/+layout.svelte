<script lang="ts">
	import SideBar from '$lib/Layout/SideBar.svelte';
	import '../css/app.css';
</script>

<div class="page">
	<SideBar />

	<div id="Content">
		<div class="inner">
			<slot />
		</div>
	</div>
</div>
