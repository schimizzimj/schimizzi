<template>
  <section class="bg-black text-gray-50">
    <div
      class="mx-auto flex items-center justify-between md:justify-around w-100 md:w-9/12 pt-3 md:py-0"
    >
      <figure class="md:h-[450px] w-1/3 md:w-auto overflow-hidden">
        <img class="block w-auto" src="Subject.png" />
      </figure>
      <div
        class="w-2/3 md:w-auto max-w-prose px-3 md:px-6 font-sans text-md md:text-lg"
      >
        <p>Hi there! My name is Marcus.</p>
        <br />
        <p>
          I'm a full-stack software developer (although I've been doing a lot of
          front end lately) especially interested in data visualization. I'm
          currently working for
          <strong class="qualtrics">
            <a href="https://www.qualtrics.com">Qualtrics</a>
          </strong>
          on their data visualization team.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.qualtrics {
  background-image: linear-gradient(90deg, #21dbaa, #00b4ef, #0768dd, #5f1ae5);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
}

.qualtrics:hover {
  text-decoration: underline;
}
</style>
