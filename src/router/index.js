import Vue from "vue";
import VueRouter from "vue-router";

//import file view yang akan dipanggil diroute
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  { //berarti ketika membuka http://localhost/ akan menampilkan halaman login
    path: "/",
    name: "Login",
    component: Login
  },
  { //berarti ketika membuka http://localhost/home akan menampilkan halaman home
    path: "/home",
    name: "Home",
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router; //harus diexport agar main.js ketika import bisa baca variabel const router
