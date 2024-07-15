<script setup lang="ts">

const header = ref<HTMLElement | null>(null)
const { height } = useElementBounding(header)

</script>

<template>
  <div>
    <header ref="header" class="p-4 sticky top-0 z-10 bg-white border-b">
      <nav class="flex gap-4">
        <a href="#hero">Hero</a>
        <a href="#about-us">About Us</a>
        <a href="#interesting">Interesting</a>
        <a href="#certificates">Certificates</a>
        <a href="#products">Products</a>
        <div class="flex-1"></div>
        <a href="#contacts">Contacts</a>
      </nav>
    </header>
    <main>
      <div class="h-screen relative" :style="{ height: `calc(100vh - ${height}px)` }">
        <div class="absolute" :style="{ top: `-${height}px` }" id="hero"></div>
        hero
      </div>
      <div class="h-screen relative">
        <div class="absolute" :style="{ top: `-${height}px` }" id="about-us"></div>
        about
      </div>
      <div class="h-screen relative">
        <div class="absolute" :style="{ top: `-${height}px` }" id="interesting"></div>
        interesting
      </div>
      <div class="h-screen relative">
        <div class="absolute" :style="{ top: `-${height}px` }" id="certificates"></div>
        certificates
      </div>
      <div class="h-screen relative">
        <div class="absolute" :style="{ top: `-${height}px` }" id="products"></div>
        products
      </div>
      <div class="h-screen relative">
        <div class="absolute" :style="{ top: `-${height}px` }" id="contacts"></div>
        contacts
      </div>
    </main>
    <footer class="border-t">
      <p>
        This is the footer of the landing page.
      </p>
    </footer>
  </div>
</template>