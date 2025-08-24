<template>
  <navbar-component />
    <router-view></router-view>

  <footer-component class=" w-full" />
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
components: {
  NavbarComponent,
  FooterComponent
},
data() {

},

};
</script>

<style scoped></style>
