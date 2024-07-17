<script setup lang="ts">
const { find } = useStrapi();

const { data, meta } = await find<{ title: string }>('blogs')
</script>

<template>
  blog
  <div v-for="post in data">
    {{ post.id }}
    <div>{{ post.attributes.title }}</div>
    <nuxt-link :to="`/blog/${post.id}`">Read more</nuxt-link>
  </div>
</template>