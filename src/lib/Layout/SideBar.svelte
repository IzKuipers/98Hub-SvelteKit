<script lang="ts">
	import c98 from '$assets/c98.gif';
	import c98badge from '$assets/c98badge.gif';
	import wvleft from '$assets/wvleft.gif';
	import wvline from '$assets/wvline.gif';
	import Navigation from './Navigation.svelte';
	import Error from './SideBar/Error.svelte';
</script>

<div id="Panel" style="background: white URL({wvleft}) no-repeat">
	<p class="image">
		<img src={c98} alt="" width="32" height="32" />
	</p>
	<p class="Title">Cortex 98</p>
	<p class="LogoLine">
		<img src={wvline} width="100%" height="1px" alt="" />
	</p>
	<p class="Links">Select a page to get where you want to go.</p>
	<Navigation />
	<Error />
	<div class="badges">
		<img src={c98badge} alt="" />
	</div>
</div>
