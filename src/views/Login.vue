<template>
	<div class="home">
		<h1>Login</h1>
		<div class="form-group">
			<label for="exampleInputEmail1">Username</label>
			<input
				v-model="username"
				type="text"
				class="form-control"
				id="exampleInputEmail1"
			/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input
				v-model="password"
				type="password"
				class="form-control"
				id="exampleInputPassword1"
			/>
		</div>
		<button v-on:click="login(username, password)" type="submit" class="btn btn-success">Submit</button>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	el: '#login',
	name: 'Login',
	data: () => {
		return {
			username: '',
			password: '',
			message: ''
		};
	},
	methods: {
		login:  function(user, pass) {
			console.log({user, pass});

			axios.post('http://localhost:3000/login', {
				username: user,
				password: pass
			})
			.then((results) => {
				const {status} = results.data;
				if(status===401) {
					console.log('Gagal login');
					alert('Login failed');
				} 
				else {
					console.log('berhasil login');
					this.$router.push('/home');
				}
			})
			.catch(e => {
				console.log({e});
				
			})
		}
	},
	mounted: () => {
		console.log('Login mounted');
	}
};
</script>

<style>
div.home {
	margin: 100px 400px;
	padding: 50px 100px;
	background-color: lightblue;
}
h1 {
	margin-bottom: 50px;
}
</style>
