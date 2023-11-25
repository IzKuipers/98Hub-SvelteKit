<script lang="ts">
	import icon from '$assets/winflop.gif';
	import ImageHeader from '$lib/ImageHeader.svelte';
</script>

<table id="LinksContent">
	<tr id="content-top">
		<td id="part">
			<slot />
		</td>
	</tr>
	<tr id="content-bottom">
		<td id="part">
			<ImageHeader src={icon} id="AddLink">
				<form action="/links/add">
					<input type="text" name="name" id="Name" maxlength="30" />
					<input type="url" name="url" id="Url" />
					<button type="submit">Add</button>
				</form>
			</ImageHeader>
		</td>
	</tr>
</table>

<style>
	#LinksContent {
		height: 100%;
	}
	form {
		display: inline;
	}

	form * {
		vertical-align: middle;
	}

	form input {
		height: 22px;
		margin-right: 5px;
	}

	form #Url {
		width: 300px;
	}

	form #Name {
		width: 100px;
	}

	form button {
		padding: 0 5px;
	}

	#content-top {
		vertical-align: top;
	}

	#content-bottom {
		vertical-align: bottom;
	}
</style>
