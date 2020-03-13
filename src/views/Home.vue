<template>
  <div class="home">
    <ul id="film-list">
      <FilmMember v-for="title in titles" :title="title" v-bind:key="title" />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import FilmMember from "@/components/FilmMember.vue";
import axios from "axios";

export default {
  el: "#film-list",
  name: "Film",
  components: {
    FilmMember
  },
  data: () => {
    return {
      titles: []
    };
  },
  mounted() {
    console.log("Home.vue mounted");
    const BASE_URL = "https://api.themoviedb.org/3/";
    const API_KEY = "?api_key=54fb0736054c2be79f6f930f4cae9a70";

    axios
      .get(BASE_URL + "movie/upcoming" + API_KEY)
      .then(response => {
        console.log({ response });
        this.titles = response.data.results;
        console.log("this.title", this.titles);
      })
      .catch(e => {
        console.log({ e });
      });
  }
};
</script>
