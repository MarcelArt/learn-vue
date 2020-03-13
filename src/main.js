//import library, view, dan konfigurasi routenya
import Vue from "vue";
import App from "./App.vue"; //halaman paling puncak disini biasanya tambahin navbar, dll/komponen yang selalu ada disetiap halaman
import router from "./router"; // file konfigurasi route (otomatis selalu ambil index.js di folder yang ditunjuk.)
import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;

//intinya bilang buka komponen App dengan id app <div id="app">
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
