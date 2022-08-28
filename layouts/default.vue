<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="lg:max-w-3xl w-full relative">
      <Nav />
      <main class="p-4">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>
