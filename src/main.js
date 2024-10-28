import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

//COMENZAMOS SEPARANDO NUESTRA 
//CREACION DE APLICACION EN UNA VARIABLE.

var app = createApp(App);
app.use(router).mount('#app')

app.config.globalProperties.$filters ={

    //EN ESTE CODIGO INCLUIREMOS NUESTROS METODOS GLOBALES
    mayuscula(dato){
        return dato.toUpperCase();
    },

    getNumeroDoble(numero){
        return numero*2;
    }
    
}
