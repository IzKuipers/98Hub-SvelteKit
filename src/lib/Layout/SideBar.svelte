<script lang="ts">
	import { page } from '$app/stores';
	import c98 from '$assets/c98.gif';
	import c98bsod from '$assets/c98bsod.gif';
	import c98badge from '$assets/c98badge.gif';
	import wvleft from '$assets/wvleft.gif';
	import wverror from '$assets/wvleftgray.gif';
	import wvlineerr from '$assets/wvlineerr.gif';
	import wvline from '$assets/wvline.gif';
	import { sidebarTitle } from '../../ts/env';
	import Navigation from './Navigation.svelte';
	import Error from './SideBar/Error.svelte';
</script>

<div id="Panel" style="background: white URL({$page.error ? wverror : wvleft}) no-repeat">
	<p class="image">
		<img src={$page.error ? c98bsod : c98} alt="" width="32" height="32" />
	</p>
	<p class="Title">
		{$sidebarTitle || 'Cortex 98'}
	</p>
	<p class="LogoLine">
		<img src={$page.error ? wvlineerr : wvline} width="100%" height="1px" alt="" />
	</p>
	<p class="Links">Select a page to get where you want to go.</p>
	<Navigation />
	<Error />
	<div class="badges">
		<img src={c98badge} alt="" />
	</div>
</div>
