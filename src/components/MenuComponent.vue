<template>
  <div>
    <ul id="menu">
        <li>
            <router-link to="/"> Home |</router-link>
        </li>
        <li>
            <router-link to="/cine"> Cine |</router-link>
        </li>
        <li>
            <router-link to="/musica"> Musica |</router-link>
        </li>
        <li>
            <router-link to="/ciclovida"> Ciclo Vida |</router-link>
        </li>
        <li>
            <router-link to="/directivas"> Directivas |</router-link>
        </li>
        <li>
            <router-link to="/propiedadconmutada"> Propiedad Conmutada |</router-link>
        </li>
        <li>
            <router-link to="/parimpar"> Par/Impar </router-link>
        </li>
        <li>
            <router-link to="/metodosfilters"> Métodos Filters </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
    ul#menu li {
        display: inline
    }
</style>