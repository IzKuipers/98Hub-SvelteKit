<script lang="ts">
	import fs from '$assets/fs.gif';
	import Directory from '$lib/Directory.svelte';
	import ImageHeader from '$lib/ImageHeader.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ImageHeader src={fs}>Filesystem</ImageHeader>
<p>
	The Cortex 98 Filesystem contains important files, installers and other data that may be useful to
	have on Windows 98. The files are picked out carefully and should all run on Windows 98 SE.
</p>
<Directory dirs={data.dirs} files={data.files} root></Directory>
