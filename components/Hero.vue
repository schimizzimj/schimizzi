<template>
  <section
    class="min-h-screen items-stretch flex flex-col justify-between bg-[#212121]"
  >
    <Blobs class="z-0" />
    <div class="grow shrink-0 p-12 flex items-center">
      <div class="relative w-auto m-auto grow shrink">
        <div class="-mx-3 -mt-3 last:-mb-3 justify-center md:flex">
          <div class="block basis-0 shrink grow p-3">
            <div class="logo block relative mb-3">
              <img class="block h-auto w-full" src="/logo-gradient.svg" />
            </div>
            <h1
              class="text-white text-opacity-80 text-3xl lg:text-5xl font-bold"
            >
              Hi, I'm Marcus. <br />
              <span class="gradient">
                Software developer,<br />
                world traveler,<br />
                and policy junkie too.
              </span>
            </h1>
            <SocialMediaLogos />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.logo {
  margin: 0 0 0.25rem;
  height: 32px;
  width: 32px;
}

.gradient {
  background-clip: text;
  background-image: linear-gradient(160deg, #1f5abd 0, #8910a8 100%);
  display: inline-block;
  padding-bottom: 1rem;
  position: relative;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  z-index: 2;
}

@media screen and (min-width: 1024px) {
  .logo {
    height: 64px;
    width: 64px;
  }
}
</style>
