<template>
  <div>
    <h1>Ciclo de Vida</h1>
    <h2 style="color:blue">{{saludo}}</h2>
    <button @click=cambiarSaludo>Pulsa</button>
  </div>
</template>

<script>
export default {
    name: "CicloVida",
    data(){
        return {
            saludo: "Hellouuu, How r uuu? 😊"
        }
    },
    methods:{
        //en esta zona incluiremos nuestros métodos personalizados
        cambiarSaludo(){
            //SE UTILIZA LA PALABRA CLAVE this PARA LLAMAR A LAS VARIABLES
            //DE data()
            this.saludo = "Im fineeee, thank u!! 🤖"
        }
    },

    mounted(){
        console.log("😗 Componente Montado");
    },
    unmounted(){
        console.log("💔Componente destruido");
    },
    updated(){
        console.log("🔷Componente modificado");
    },
    created(){
        console.log("✅Componente creado");
    }
}

</script>

<style>

</style>