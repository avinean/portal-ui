<script setup lang="ts">
const header = ref<HTMLElement | null>(null)
const { height } = useElementBounding(header)
</script>

<template>
  <div>
    <header
      ref="header"
      class="p-4 sticky top-0 z-10 bg-white border-b"
    >
      <nav class="flex gap-4">
        <a href="#hero">Hero</a>
        <a href="#about-us">About Us</a>
        <a href="#interesting">Interesting</a>
        <a href="#certificates">Certificates</a>
        <a href="#products">Products</a>
        <div class="flex-1" />
        <a href="#contacts">Contacts</a>
      </nav>
    </header>
    <main :style="{ '--header-height': `${height}px` }">
      <slot />
    </main>
    <footer class="border-t">
      <p>
        This is the footer of the landing page.
      </p>
    </footer>
  </div>
</template>
