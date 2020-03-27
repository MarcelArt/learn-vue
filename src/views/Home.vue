<template>
	<v-app>
		<div class="home">
			<v-col cols="6">
				<v-select
					v-model="selected"
					:items="titles"
					item-text="original_title"
					item-value="poster_path"
				></v-select>
				<v-btn depressed v-on:click="getSelectValue()" ></v-btn>
			</v-col>
			<!-- <ul id="film-list">
			<FilmMember
				v-for="title in titles"
				:title="title"
				v-bind:key="title"
			/>
		</ul> -->
		</div>
	</v-app>
</template>

<script>
// @ is an alias to /src
// import FilmMember from '@/components/FilmMember.vue';
import axios from 'axios';

export default {
	el: '#film-list',
	name: 'Film',
	components: {
		// FilmMember
	},
	data: () => {
		return {
			title: {
				original_title: '',
				poster_path: ''
			},
			titles: [],
			select: {state: 'Florida', abbr: 'FL'},
			items: [
				{state: 'Florida', abbr: 'FL'},
				{state: 'Georgia', abbr: 'GA'},
				{state: 'Nebraska', abbr: 'NE'},
				{state: 'California', abbr: 'CA'},
				{state: 'New York', abbr: 'NY'}
			],
			names: ['a', 'b', 'c'],
			selected: ''
		};
	},
	methods: {
		getFilms() {
			const BASE_URL = 'https://api.themoviedb.org/3/';
			const API_KEY = '?api_key=54fb0736054c2be79f6f930f4cae9a70';

			axios
				.get(BASE_URL + 'movie/upcoming' + API_KEY)
				.then(response => {
					console.log({response});
					this.titles = response.data.results;

					console.log('this.title', this.titles);
				})
				.catch(e => {
					console.log({e});
				});
		},
		getSelectValue() {
			console.log('this.selected', this.selected);
		}
	},
	mounted() {
		console.log('Home.vue mounted');

		this.getFilms();

		// axios
		//   .get('http://localhost:80/project_j/index.php/transaksi/show/')
		//   .then(response => {
		//     console.log({ response });
		//   })
		//   .catch(e => {
		//     console.log(e);
		//   });

		// axios
		// 	.post('http://localhost/project_j/index.php/transaksi/delete/7')
		// 	.then(response => {
		// 		console.log({response});
		// 	})
		// 	.catch(e => {
		// 		console.log(e);
		// 	});

		// fetch('http://localhost:80/project_j/index.php/transaksi/show')
		// 	.then(response => response.json())
		// 	.then(data => console.log({data}))
		// 	.catch(e => console.log(e));
	}
};
</script>

<style>
div.home {
	margin: 100px 400px;
	padding: 50px 100px;
	background-color: lightblue;
}
</style>
