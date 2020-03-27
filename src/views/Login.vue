
<template>
<!-- fungsi mounted selalu dipanggil ketika masuk halaman/komponen dipanggil -->
	<div class="login">
		<h1>Login</h1>
		<div class="form-group">
			<label for="exampleInputEmail1">Username</label>
			<!-- v-model berarti mengikat komponen input ini dengan variabel username dari object data dibawah -->
			<input
				v-model="username"
				type="text"
				class="form-control"
				id="exampleInputEmail1"
			/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<!-- v-model berarti mengikat komponen input ini dengan variabel password dari object data dibawah -->
			<input
				v-model="password"
				type="password"
				class="form-control"
				id="exampleInputPassword1"
			/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<!-- v-model berarti mengikat komponen input ini dengan variabel password dari object data dibawah -->
			<input
				@change="onFileChanged"
				type="file"
				class="form-control"
				id="exampleInputFile"
			/>
		</div>
		<!-- v-on:click berarti ketika button ditekan memanggil fungsi login dari object methods dibawah -->
		<button
			v-on:click="login(username, password)"
			type="submit"
			class="btn btn-success"
		>
			Submit
		</button>
	</div>
</template>

<script>
import axios from 'axios'; //import library untuk melakukan http request

export default {
	el: '#login',
	name: 'Login',
	
	data: () => { // variabel/object yang akan digunakan di halaman ini diinit disini
		return {
			username: '',
			password: '',
			message: '',
			file: null
		};
	},
	methods: { // fungsi2 yang akan digunakan di halaman ini didefinisikan disini
		login: function(user, pass) {
			console.log({user, pass}); //console.log untuk melihat inputan apakah berhasil masuk ke situs lihat di console dengan tekan F12 di browser

			axios
				.post('http://localhost:3000/login', { //endpoint api
					username: user, //yang dikiri (:) adalah request parameter yang dibutuhkan api, sedangkan yang kanan adalah variabel yang menampung data yang ingin dikirim ke backend 
					password: pass
				})
				.then(results => { //eksekusi ketika data berhasil dikirim
					const {status} = results.data; //sama saja dengan menulis "const status = results.data.status;"
					if (status === 401) { //ketika statusnya 401 akan menampilkan alert
						console.log('Gagal login');
						alert('Login failed');
					} else { //jika tidak pindah halaman ke localhost/home
						console.log('berhasil login');
						this.$router.push('/home');
					}
				})
				.catch(e => {
					console.log({e}); //error handling
				});
		},
		onFileChanged: (e) => {
			let reader = new FileReader();
			reader.readAsDataURL(e.target.files[0])
			reader.onload = (res) => {
				console.log('res.target.result', res.target.result);
			}
			console.log('e', e.target.files);
		}
	},
	mounted: () => { //fungsi ini selalu dipanggil ketika masuk ke halaman ini
		console.log('Login mounted');
	}
};
</script>

<style>
div.login {
	margin: 100px 400px;
	padding: 50px 100px;
	background-color: lightblue;
}
h1 {
	margin-bottom: 50px;
}
</style>
