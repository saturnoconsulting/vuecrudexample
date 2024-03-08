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
      axios.get("/posts").then((response) => response.data)
          .then((json) => console.log(json))
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