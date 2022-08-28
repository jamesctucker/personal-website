<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="lg:max-w-3xl w-full relative">
      <Nav />
      <div class="p-4">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import "../styles/global.css";
</script>
