<template>
	<div class="film">
		<li>
			<h1>{{ title.original_title }}</h1>
			<img :src="`https://image.tmdb.org/t/p/w500${title.poster_path}`" alt="">
		</li>
	</div>
</template>

<script>
export default {
	name: 'FilmMember',
	props: {
		title: String
	}
};
</script>

<style></style>
