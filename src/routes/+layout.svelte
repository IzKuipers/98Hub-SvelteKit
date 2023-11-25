<script lang="ts">
	import SideBar from '$lib/Layout/SideBar.svelte';
	import '../css/app.css';
	import { innerClass } from '../ts/env';
</script>

<div class="page">
	<SideBar />

	<div id="Content">
		<div class="inner {$innerClass || ''}">
			<slot />
		</div>
	</div>
</div>
