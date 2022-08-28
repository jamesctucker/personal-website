<template>
  <div>
    <Nav />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>
