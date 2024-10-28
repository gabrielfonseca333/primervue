import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import CicloVida from "./components/CicloVida.vue"
import Directivas from "./components/DirectivasComponent.vue"
import PropiedadConmutada from "./components/PropiedadConmutada.vue"


//Creamos una constante array para las rutas
const myRoutes = [
  {
    path: "/", component: HomeComponent,
  },
  { path: "/musica", component: MusicaComponent },
  { path: "/cine", component: CineComponent },
  {path:"/ciclovida", component: CicloVida},
  {path:"/directivas", component: Directivas},
  {path:"/propiedadconmutada", component: PropiedadConmutada}
];

//CREAMOS UNA CONSTANTE PARA EL HISTORIAL E INCLUIR EL ARRAY DE RUTAS
//DICHO NOMBRE DE CONSTANTE SERA EL QUE UTILIZAREMOS DENTRO DE MAIN JS

const router = createRouter({
    history:createWebHistory(),
        routes:myRoutes
    })

    //POR ULTIMO, EXPOTAMOS LA CONSTANTE router POR EL MISMO APP
    export default router;
