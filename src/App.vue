<script>
import Header from "./components/Header.vue";
import axios from "Axios";

export default {
  components: { Header },
  data(){
    return {
      'message': 'Ciao come va?',
      'posts': []
    };
  },
  methods: {
    fetchPosts() {
      axios.get('http://localhost:8880/api/projects')
      .then((resp) => {
        this.posts = resp.data;
      })
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<template>
  <Header></Header>
  <router-view></router-view>
  <h1>{{ message }}</h1>
</template>

<style lang='scss'>
@use "styles/main";
</style>
