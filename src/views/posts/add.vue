<template>
  <div class="margin">
    <b-card header="Crea un nuovo post">
      <b-card-body>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
              id="input-group-1"
              label="Inserisci titolo del post:"
              label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.title"
                type="text"
                placeholder="Premi per inserire il testo"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Inserisci descrizione del post:" label-for="input-2">
            <b-form-textarea
                id="input-2"
                v-model="form.body"
                placeholder="Premi per inserire il testo"
                rows="10"
                no-resize
                required
            ></b-form-textarea>
          </b-form-group>

          <div class="div-bottoni">
            <b-button type="submit" variant="primary">Conferma</b-button>
            <b-button type="reset" variant="danger">Annulla</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>

  </div>
</template>

<script>
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
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.body = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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

</style>