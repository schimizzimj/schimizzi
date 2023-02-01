<template>
  <div class="links">
    <a
      id="linkedin"
      href="https://www.linkedin.com/in/marcus-schimizzi-56a6229b"
      target="_blank"
    >
      <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
    </a>
    <a id="github" href="https://github.com/schimizzimj" target="_blank">
      <font-awesome-icon class="icon" icon="fa-brands fa-github" />
    </a>
    <a
      id="facebook"
      href="https://facebook.com/marcus.j.schimizzi"
      target="_blank"
    >
      <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
    </a>
    <a
      id="instagram"
      href="https://instagram.com/marcusschimizzi"
      target="_blank"
    >
      <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.links a {
  position: relative;
  padding: 0 1rem;
  transition: color 0.2s ease;
  color: #a5a5a5;
}

.links a svg {
  will-change: transform;
  transition: transform 600ms ease;
}

.links a:hover svg {
  transition: transform 150ms ease;
  transform: translateY(-0.5rem);
}

#linkedin:hover {
  color: #0077b5;
}

#github:hover {
  color: #6e5494;
}

#facebook:hover {
  color: #4267b2;
}

#instagram:hover {
  color: #c13584;
}

.icon {
  @apply items-center inline-flex justify-center h-6 w-6;
}
</style>
