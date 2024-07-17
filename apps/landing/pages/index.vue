<script setup lang="ts">
</script>

<template>
  <div>
    <div
      class="h-screen relative"
      :style="{ height: 'calc(100vh - var(--header-height))' }"
    >
      <div id="hero" class="absolute" :style="{ top: `calc(0px - var(--header-height))` }" />
      hero
    </div>
    <div class="h-screen relative">
      <div id="about-us" class="absolute" :style="{ top: `calc(0px - var(--header-height))` }" />
      about
    </div>
    <div class="h-screen relative">
      <div id="interesting" class="absolute" :style="{ top: `calc(0px - var(--header-height))` }" />
      interesting
    </div>
    <div class="h-screen relative">
      <div id="certificates" class="absolute" :style="{ top: `calc(0px - var(--header-height))` }" />
      certificates
    </div>
    <div class="h-screen relative">
      <div id="products" class="absolute" :style="{ top: `calc(0px - var(--header-height))` }" />
      products
      <ProductCarousel />
      <ULink to="/c/teacher">
        See more
      </ULink>
    </div>
    <div class="h-screen relative">
      <div id="contacts" class="absolute" :style="{ top: `calc(0px - var(--header-height))` }" />
      contacts
    </div>
  </div>
</template>
