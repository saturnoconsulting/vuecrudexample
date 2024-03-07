<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(actions)="row">
        <b-button class="bottoneModifica" variant="outline-info" size="sm" @click="row">Modifica</b-button>
        <b-button size="sm" @click="row" variant="outline-danger"> Elimina </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dataTable",
  data() {
    return {
      items: [],
      fields:[
        { key: "title", label: 'Age', sortable: true },
        { key: "actions", label: "Actions" }
      ]
    }
  },
  methods:{
    async getPosts() {
      axios.get("/posts").then((response) => response.data)
          .then((json) => console.log(json))
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>

<style scoped>

.bottoneModifica{
  margin-right: 1rem;
}

</style>