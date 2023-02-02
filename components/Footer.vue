<template>
  <footer class="bg-[#151a1e] pt-12 pw-6 pb-24 text-center">
    <div class="mx-auto relative w-auto">
      <a href="/">
        <figure class="inline-block h-12 w-12 relative">
          <img class="block h-auto w-full" src="/logo-gradient.svg" />
        </figure>
      </a>
      <div class="md:flex justify-center -mw-3 mt-2">
        <div class="block p-3 md:w-1/3">
          <h1 class="text-xl lg:text-3xl font-semibold text-gray-50">
            Marcus J. Schimizzi
          </h1>
        </div>
      </div>
      <div class="mt-3">
        <SocialMediaLogos />
      </div>
      <div class="mt-3 text-gray-100">
        <p>
          Made by me with
          <font-awesome-icon
            class="text-[#b51442] align-middle"
            icon="fa-solid fa-heart"
          />
        </p>
        <p>
          and lots of
          <font-awesome-icon
            class="text-[saddlebrown] align-middle"
            icon="fa-solid fa-coffee"
          />
        </p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-copyright"
            class="align-middle"
          ></font-awesome-icon>
          2023
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
