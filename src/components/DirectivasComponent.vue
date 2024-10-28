<template>
  <div>
    <h1>Directivas</h1>
    <h1>
        <!-- EL SIMBOLO $ NOS PERMITE ACCEDER A ELEMENTOS DENTRO DE VUE -->
        {{$data}}
    </h1>

    <input v-model="numero" type="number" placeholder="numero"/>
    <h2 v-if="numero > 0">
        POSITIVO ✅
    </h2>
    <h2  v-else-if="numero < 0">
        NEGATIVO ❌
    </h2>
    <h2 v-else>
        CERO 😑
    </h2>

    <br/>
    <ul v-if="series.length > 0">
        <li v-for="serie in series" :key="serie">
            {{serie}}
        </li>
    </ul>


  </div>
</template>

<script>
export default {
    name: "DirectivasComponent",

    data(){
        return {
            numero: 0,
            series:["Futurama", "Suits", "Los Simpsons", "Phineas & Ferb", "LOST"]
        }
    },

    methods:{

    }
}

</script>

<style>

</style>