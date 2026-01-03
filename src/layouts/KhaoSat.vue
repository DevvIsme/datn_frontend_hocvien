<script setup>
import Header from "../components/ParitialCompetision/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <!-- <div class="max-lg:hidden"><Header /></div> -->

  <slot />

  <div class="max-md:hidden">
    <Footer />
  </div>
  
</template>
