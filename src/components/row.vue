<template>
  <tr>
    <td>{{item.title}}</td>
    <td>
      <div class="div-bottoni">
        <b-button size="sm" @click="edit(item)" variant="outline-info" >Modifica</b-button>
        <b-button size="sm" @click="remove(item)" variant="outline-danger">Elimina</b-button>
      </div>
    </td>
  </tr>
</template>


<script>
import Post from "@/models/Post";

export default {
  name: "rowTable",
  props: {
    item: {
      type: Post,
      required: true,
      default: []
    }
  },
  methods:{
    edit(item){

      return console.log(item.id)
    },
    async remove(item){
      try {
        // resource will not be really updated on the server but it will be faked as if.
        this.$store.dispatch('removeRow', item);
      } catch (error) {
        console.error(`Error deleting post: ${error}`);
      }
    }
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