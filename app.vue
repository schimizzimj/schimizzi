import { ClientOnly } from './.nuxt/components';

<template>
  <NuxtLayout>
    <Hero />
    <Blurb />
    <Projects />
    <Contact />
    <ClientOnly>
      <LinesAnimation :width="windowWidth" :height="200" />
    </ClientOnly>
  </NuxtLayout>
</template>

<script>
export default {
  computed: {
    windowWidth() {
      return window.innerWidth;
    },
  },
};
</script>
