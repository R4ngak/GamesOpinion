<template>
  <div class="home">
    <div class="galeria">
      <div v-for="(game, i) in games" :key="i" class="card">
        <img :src="game.background_image" class="card-img-top" height="200" />
        <div class="card-body">
          <h5 class="card-title">{{ game.name }}</h5><hr>
          <p class="card-text">Rating: {{ game.rating }}</p><hr>
          <p class="card-text">Lanzamiento: {{ game.released }}</p> <hr>
          <button
            @click="gameSelected = game.name"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Opinar
          </button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div>
              <h4>Opinion para el Juego : {{ gameSelected }}</h4>
              <div>
                <label>Nombre: </label>
                <input v-model="opinion.nombreUsuario" class="form-control" />
              </div>

              <div>
                <label>Opinion: </label>
                <textarea
                  v-model="opinion.descripcion"
                  class="form-control"
                ></textarea>
              </div>

              <div class="mt-2">
                <button @click="agregarOpinion" class="btn btn-primary">
                  Agregar
                </button>
              </div>
              {{ opinion }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <i class="bi bi-controller"></i>
    {{ opiniones }}

    <hr />
    {{ getGamesAndOpinions }}
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["get_Games"]),
    ...mapMutations(["AGREGAR_OPINION"]),
    agregarOpinion() {
      const { gameSelected } = this;
      const opinion = { ...this.opinion };
      opinion.idGame = gameSelected;
      opinion.id = Math.floor(Math.random() * 999);
      this.AGREGAR_OPINION(opinion);
      this.opinion.nombreUsuario = " ";
      this.opinion.descripcion = " "
    },
  },
  mounted() {
    this.get_Games();
  },
  data() {
    return {
      gameSelected: null,
      opinion: {
        nombreUsuario: "",
        descripcion: "",
      },
    };
  },
  computed: {
    ...mapState(["games", "opiniones"]),
    ...mapGetters(["getGamesAndOpinions"]),
  },
};
</script>
<style >
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: auto;
}
</style>
