<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <b-button variant="outline-primary" class="float-end">Add</b-button>
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
  }
}
</script>

<style scoped>

</style>