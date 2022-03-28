<template>
  <div class="container">
    <h1>Reseñas de Opiniones</h1>
    <hr />
    <div v-if="noHayOpiniones" class="alert alert-danger">
      No hay Opiniones
    </div>
    <div
    v-else
      v-for="(opinion, i) in getGamesAndOpinions"
      :key="i"
      class="accordion"
      id="accordionExample"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Opinion de {{ opinion.nombreUsuario }} Acerca del Juego
            {{ opinion.name }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body text-start">
            {{ opinion.descripcion }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getGamesAndOpinions"]),
    noHayOpiniones() {
      return this.getGamesAndOpinions.length === 0;
    }
    
  },
};
</script>