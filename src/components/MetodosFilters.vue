<template>
  <div>
    <h1>Metodos Filters</h1>
    <ul>
      <li v-for="num in numeros" :key="num">
        numero: {{num}} <br>
        numero doble: {{$filters.getNumeroDoble(num)}}
        </li>
    </ul>
    <br/>
    <ul>
      <li v-for="name in nombres" :key="name">
        {{$filters.mayuscula(name)}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "MetodosFilters",
    data(){
      return{
        nombres:["gabriel", "vinicius", "lamine", "adrian"],
        numeros:[-8,8,55,94,101,77]
      }
    }
}
</script>

<style>

</style>