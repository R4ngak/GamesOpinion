import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administracion from '../views/Administracion.vue'
import Opiniones from '../views/Opiniones.vue'
import EditarOpiniones from '../views/ListaOpiniones.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: Administracion
  },
  {
    path: '/editar/:id',
    name: 'EditarOpiniones',
    props: true,
    component: EditarOpiniones
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    props: true,
    component: Opiniones
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
