<template>
  <h1>Blog</h1>
  <ContentList path="/blog" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <NuxtLink :to="article._path">
        <h2>{{ article.title }}</h2></NuxtLink
      >
      <p>{{ article.description }}</p>
    </div>
  </ContentList>
</template>
<script setup>
definePageMeta({
  title: "Blog",
});
</script>
