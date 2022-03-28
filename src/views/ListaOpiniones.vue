<template>
  <div class="container">
    <h1>Edicion de opiniones</h1>

    <div>
      <label>Usuario </label>
      <input class="form-control" v-model="opinion.nombreUsuario"/>
    </div>
     <div>
      <label>Opinion </label>
      <textarea class="form-control" v-model="opinion.descripcion"></textarea>
    </div>
    <div class="mt-3">
      <button
      @click="modificarOpinion"
      >

      No funcionó :c </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  props: ["id"],
  methods: {
    ...mapActions(["modificar_Opinion"]),
    modificarOpinion(){
      const {opinion} = this;
      this.modificar_Opinion(opinion)
      console.log(opinion)
      this.$router.push("/administracion");

    }

  },
  computed: {
    ...mapGetters(["getOpinionById"]),
    opinion(){
      const { id } = this ;
      console.log(id);
      return { ...this.getOpinionById(+id) };
    },
  },
  mounted(){
    this.opinionEditando = { ...this.opinion};
  },
};
</script>