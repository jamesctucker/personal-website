<template>
  <div class="flex flex-col items-center min-h-screen">
    <Head>
      <Title>{{ route.meta.title }}</Title>
      <!-- <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: green; }" /> -->
    </Head>
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

const route = useRoute();
</script>
