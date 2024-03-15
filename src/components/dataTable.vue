<template>
  <div>
    <table class="table">
      <tr>
        <th v-for="field in fields" :key="field.key">{{field.label}}</th>
      </tr>
      <template v-for="(item,key) in posts" v-bind:key="key">
        <row v-bind:item="item"></row>
      </template>


    </table>
    <div class="text-center" v-if="spinner">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>

  </div>
</template>

<script>

import axios from "axios";
import Post from "@/models/Post";
import row from "@/components/row.vue";

export default {
  name: "dataTable",
  components: {row},
  data() {
    return {
      fields:[
        { key: "title", label: 'Titolo'},
        { key: "actions", label: "Azioni"}
      ],
    }
  },
  computed:{
    posts() {
      return this.$store.getters.getPosts;
    },
    spinner(){
      return this.$store.getters.getSpinner;
    }
  },
  methods:{
    async getPosts() {
      this.$store.commit('setSpinner', true);

      let posts = await axios.get("/posts").then((response) => response.data);
      this.$store.commit('setSpinner', false);
      return posts;
    },
  },
  async mounted(){
    let posts = await this.getPosts();
    let postsConverted = [];
    for (let i = 0; i < posts.length; i++){
      postsConverted.push(new Post(posts[i].id, posts[i].title, posts[i].body));
    }
    this.$store.commit('setPosts', postsConverted);
  }
}
</script>

<style scoped>

</style>