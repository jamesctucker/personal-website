<template>
  <header class="flex w-full justify-between p-4">
    <NuxtLink to="/">./jamestucker.sh</NuxtLink>
    <div class="flex flex-row justify-between space-x-4">
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/photography">Photography</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <button @click="changePreference"><SunIcon class="h-6 w-6" /></button>
    </div>
  </header>
</template>
<script setup>
import { SunIcon } from "@heroicons/vue/24/outline";

const colorMode = useColorMode();
const changePreference = () => {
  console.log("here", colorMode.preference);
  if (colorMode.preference === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }
};
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
