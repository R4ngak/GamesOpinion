import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games: [],
    opiniones: []
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    AGREGAR_OPINION(state, opinion) {
      state.opiniones.push(opinion);
    },
    ELIMINAR_OPINION(state, indice) {
      state.opiniones.splice(indice, 1);
    },
    MODIFICAR_OPINION(state, { indice, opinion }) { // no esta  funcionando
      const opiniones = [...state.opiniones];
      opiniones[indice] = opinion;
      state.opiniones = opiniones;
    }
  },
  actions: {
    modificar_Opinion({ commit, state }, opinion) {
      const { opiniones } = state;
      const { id } = opinion;
      const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);
      commit("MODIFICAR_OPINION", { indice: indiceDeLaOpinion, opinion });
    },
    eliminar_Opinion({ commit, state }, id) {
      const { opiniones } = state;
      console.log(opiniones)
      const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);
      commit("ELIMINAR_OPINION", indiceDeLaOpinion);
    },
    async get_Games({ commit }) {

      const endpoint = "/games.json";
      const gamesData = await axios.get(endpoint);
      const { data: games } = gamesData;
      commit("SET_GAMES", games);
    },

  },
  getters: {
    getGamesAndOpinions(state) {
      const { games, opiniones } = state;
      const getFullData = []
      opiniones.forEach((opinion) => {
        const gameRelacionadoConLaOpinion = games.find(
          (game) => game.name === opinion.idGame
        );
        const gameyOpinionUnificada = {
          ...opinion,
          ...gameRelacionadoConLaOpinion
        };
        getFullData.push(gameyOpinionUnificada);
      });
      return getFullData;
    },
    getOpinionById: (state) => (id) => {
      const { opiniones } = state;
      const opinion = opiniones.find((o) => o.id === id);
      return opinion;
    }
  }
});

store.dispatch("get_Games")
export default store;
