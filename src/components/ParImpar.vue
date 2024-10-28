<template>
  <div>
    <h1>Par Impar</h1>

    <hr>
    <h3 style="color: magenta">Hecho con method</h3>
    <input v-model="numero" type="number" placeholder="introduce un numero"/><br/>
    <button @click="comparar()" >Comparar</button>
    <div v-html="html">
    </div>

    <hr>
    <h3 style="color: magenta">Hecho con computed</h3>
    <input v-model="numero" type="number" placeholder="introduce un numero"/><br/>
    <div v-html="compararComputed" />

    <hr>
    <h3 style="color: magenta">Hecho con directivas</h3>
    <input v-model="numero" type="number" placeholder="introduce un numero"/><br/>
    <h2 v-if="numero %2 == 0">
        PAR 🤖
    </h2>
    <h2 v-else>
        IMPAR 🐲
    </h2>



  </div>
</template>

<script>
export default {
    name: "ParImpar",
    data(){
        return{
            numero: 0,
            html: ""
        }
    },

    computed:{

        compararComputed(){
            let respuesta = ""

            if(this.numero %2 == 0){
                //es par
                respuesta= "<h2>"+ this.numero+"  , es par 🤖</h2>"
            }else{
                //es impar
                respuesta= "<h2>"+ this.numero+"  , es impar 🐲</h2>"
            }

            return respuesta
        }

    },

    methods:{

        comparar(){

            
            if(this.numero %2 == 0){
                //es par
                this.html += "<h2>"+ this.numero+"  , es par 🤖</h2>"
            }else{
                //es impar
                this.html += "<h2>"+ this.numero+"  , es impar 🐲</h2>"
            }

        }

    }
}
</script>

<style>

</style>