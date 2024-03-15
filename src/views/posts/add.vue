<template>
  <div class="margin">
    <b-card header="Crea un nuovo post">
      <b-card-body>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
              id="input-group-1"
              label="Inserisci titolo del post:"
              label-for="input-1">
            <b-form-input
                id="inputTitle"
                v-model="form.title"
                type="text"
                placeholder="Premi per inserire il testo"
                :class="{ 'invalid-values': form.title === '' }"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Inserisci descrizione del post:" label-for="input-2">
            <b-form-textarea
                id="inputBody"
                v-model="form.body"
                placeholder="Premi per inserire il testo"
                rows="10"
                no-resize
                :class="{ 'invalid-values': form.body === '' }"
            ></b-form-textarea>
          </b-form-group>

          <div class="div-bottoni">
            <b-button type="submit" variant="primary">Conferma</b-button>
            <router-link to="/">
              <b-button type="button" variant="danger">Annulla</b-button>
            </router-link>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "addPost",
  data() {
    return {
      form: {
        title: '',
        body: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if(this.form.title === "" || this.form.body === ""){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Non hai compilato tutti i campi!"
        });
      } else {
        this.$store.dispatch('addRow', this.form);
        Swal.fire({
          icon: "success",
          title: "Bene",
          text: "Il post è stato pubblicato!"
        });
        this.$router.push("/");
      }

    }
  }
}
</script>

<style scoped>

.margin{
  margin: 4rem
}

.div-bottoni {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.invalid-values{
  border-color: red;
}

</style>2