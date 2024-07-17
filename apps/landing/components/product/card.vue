<script setup lang="ts">
import type { Product } from '~/apps/cms/types/entities';

defineProps<Product>()
</script>

<template>
  <UCard class="relative">
    <CmsImage v-bind="poster.data.attributes"  />
    <div class="text-lg font-bold">{{ title }}</div>
    <div class="text-sm">
      <CmsRichText :content="description" />
    </div>
    <div class="flex gap-2 flex-wrap">
      <div v-for="tag in tags.split(' ')" :key="tag" >
        #{{ tag }}
      </div>
    </div>
    <div>{{ price }} ({{ discount }}%)</div>
    <div>level: {{ level }}</div>
    <ULink class="absolute inset-0" :aria-label="title" :to="`/c/teacher/${slug}`"/>
  </UCard>
</template>
