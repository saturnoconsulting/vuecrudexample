<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" :style="{ marginTop: '6rem' }">
      <template #cell(actions)="row">
        <div class="div-bottoni">
          <b-button size="sm" @click="edit(row.item)" variant="outline-info" >Modifica</b-button>
          <b-button size="sm" @click="remove(row.item)" variant="outline-danger">Elimina</b-button>
        </div>
      </template>
    </b-table>
    <div class="text-center" v-if="isLoaded()">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import store from "@/store/index.js";


export default {
  name: "dataTable",
  data() {
    return {
      items: [],
      fields:[
        { key: "title", label: 'Titolo'},
        { key: "actions", label: "Azioni"}
      ]
    }
  },
  methods:{
    async getPosts() {
      store.commit('showSpinner', store.state.spinner)

      let posts = await axios.get("/posts").then((response) => response.data)
      if(posts !== undefined){
        store.commit('hideSpinner', store.state.spinner)
      }

      return posts
    },
    edit(item){
      return console.log(item.id)
    },
    async remove(item){
      try {
        // resource will not be really updated on the server but it will be faked as if.
        await axios.delete(`/posts/${item.id}`);
        this.items = this.items.filter((i) => i.id !== item.id);
      } catch (error) {
        console.error(`Error deleting post: ${error}`);
      }
    },
    isLoaded() {
      return store.state.spinner
    }
  },
  async mounted() {
    this.items = await this.getPosts()
  }
}
</script>

<style scoped>

.div-bottoni {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

</style>