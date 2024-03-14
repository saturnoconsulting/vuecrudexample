<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <router-link to="posts/create">
          <b-button variant="primary" class="float-end mt-2">Aggiungi</b-button>
        </router-link>
        <dataTable/>
      </div>
    </div>
  </div>
</template>

<script>
import dataTable from "@/components/dataTable.vue";

export default {
  name: "postsIndex",
  components:{
    dataTable
  },
  methods:{

  }
}
</script>

<style scoped>

</style>