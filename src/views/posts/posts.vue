<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <b-button variant="primary" class="float-end mt-2">Aggiungi</b-button>
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