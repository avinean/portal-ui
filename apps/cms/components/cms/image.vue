<script setup lang="ts">
import type { Image } from '../../types/cms';

defineProps<Image>()
</script>

<template>
  <NuxtPicture
    provider="strapi" 
    :src="url"
    :alt="alternativeText"
    :width
    :height
  />
</template>