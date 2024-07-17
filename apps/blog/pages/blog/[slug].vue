<script setup lang="ts">
const route = useRoute();
const { findOne } = useStrapi();

const { data } = await findOne('blogs', route.params.slug as string)
</script>

<template>
  Item
  {{ data.attributes?.title }}
</template>