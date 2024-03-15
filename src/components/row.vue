<template>
  <tr>
    <td>{{item.title}}</td>
    <td>
      <div class="div-bottoni">
        <router-link :to="'posts/edit/' + item.id">
          <b-button size="sm" variant="info">Modifica</b-button>
        </router-link>
        <b-button size="sm" @click="remove(item)" variant="danger">Elimina</b-button>
      </div>
    </td>
  </tr>
</template>


<script>
import Post from "@/models/Post";
import Swal from "sweetalert2";

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
    remove(item){
      try {
        Swal.fire({
          title: "Sei sicuro di voler eliminare il post?",
          text: "L'operazione è irreversibile!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sono sicuro",
          cancelButtonText: "Annulla"
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('removeRow', item);
            Swal.fire({
              title: "Eliminato!",
              text: "Il post è stato cancellato con successo!",
              icon: "success"
            });
          }
        });
      } catch (error) {
        console.error(`Error deleting post: ${error}`);
      }
    }
  },
  data(){
    return{
      id: this.item.id
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