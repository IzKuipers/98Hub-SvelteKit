<div class="header">
	<form action="/drivers/search">
		<input type="text" name="query" />
		<button type="submit">Search</button>
	</form>
</div>
<div class="drivers-content">
	<slot />
</div>

<style>
	button {
		height: 22px;
	}
</style>
