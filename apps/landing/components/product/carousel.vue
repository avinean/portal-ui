
<script setup lang="ts">
const { findPreview } = useProducts()
const { data } = await findPreview()
</script>

<template>
  <UCarousel
  v-slot="{ item }" 
  :items="data?.data" arrows indicators 
  :ui="{  item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4' }"
  class="gap-2">
  <div class="p-2 flex">

    <ProductCard v-bind="item.attributes" />
  </div>
  </UCarousel>
</template>
