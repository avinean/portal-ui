
<script setup lang="ts">
const { find } = useProducts()
const { data } = await find()
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <ProductCard
      v-for="{ attributes, id } in data?.data"
      :key="id"
      v-bind="attributes"
    />
  </div>
</template>
