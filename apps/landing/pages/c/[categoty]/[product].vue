<script setup lang="ts">
const route = useRoute()
const { findOne } = useProducts()
const { data } = await findOne(route.params.product as string)
console.log(data)
</script>

<template>
  <div class="grid grid-cols-2">
    <div>
      <UCarousel v-if="data.attributes.gallery.data.length" v-slot="{ item }" :items="data.attributes.gallery.data">
        <div class="p-2">
          <CmsImage v-bind="item.attributes" />
        </div>
      </UCarousel>
      <CmsImage v-else v-bind="data.attributes.poster.data.attributes"  />
    </div>
    <div>
      <div class="text-lg font-bold">{{ data.attributes.title }}</div>
      <div class="text-sm">
        <CmsRichText :content="data.attributes.description" />
      </div>
      <div class="flex gap-2 flex-wrap">
        <div v-for="tag in data.attributes.tags?.split(' ')" :key="tag" >
          #{{ tag }}
        </div>
      </div>
      <div>{{ data.attributes.price }} ({{ data.attributes.discount }}%)</div>
      <div>level: {{ data.attributes.level }}</div>
    </div>
  </div>
</template>