<template>
  <div>
    <h1 style="color: blue">
      Titulo estático de app
    </h1>
    <MenuComponent/>
    <hr/>
      <router-view></router-view>
    <hr/>
    
    
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: "App",
  components: {
     MenuComponent
  }
};
</script>

<style>
  @import "./assets/estilos";

</style>
