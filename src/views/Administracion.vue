<template>
  <div>
    <h1>Administracion de Opiniones</h1>
     <div v-if="noHayOpiniones" class="alert alert-danger">
      No hay Opiniones
    </div>
    <div v-else class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Usuario</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(opinion, i) in getGamesAndOpinions" :key="i">
            <th>{{opinion.id}}</th>
            <td>{{opinion.nombreUsuario}}</td>
            <td>{{opinion.name}}</td>
            <td>{{opinion.descripcion}}</td>
            <td>
              <button 
              @click="irAOpiniones(opinion.id)"
              class="btn btn-warning">Editar</button>
              <button 
              @click="eliminar_Opinion(opinion.id)"
              
              class="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getGamesAndOpinions"]),
     noHayOpiniones() {
      return this.getGamesAndOpinions.length === 0;
    }
  },
  methods: {
    ...mapActions(["eliminar_Opinion"]),
    irAOpiniones(id){
      this.$router.push(`/editar/:${id}`)
    }
  }
};
</script>
