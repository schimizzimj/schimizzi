<template>
  <li
    class="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50"
  >
    <div
      class="aspect-[2688/1372] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700"
    >
      <img class="absolute inset-0 w-full h-full" :src="thumbnail" />
      <div class="hovered-video">
        <video
          class="absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]"
          preload="none"
          playsinline="false"
        >
          <source :src="demo" />
        </video>
      </div>
    </div>
    <div class="flex flex-wrap items-center mt-6">
      <h2
        class="text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400"
      >
        <a :href="link">{{ title }}</a>
      </h2>
      <svg
        class="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
        view-box="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
          stroke="#0EA5E9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p
        class="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400"
      >
        {{ description }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
const handleMouseenter = async (event: MouseEvent) => {
  const target = event.target;
  if (target instanceof Element) {
    const videoWrapper = target.querySelector(
      ".hovered-video"
    ) as HTMLDivElement;
    const video = target.querySelector(
      ".hovered-video video"
    ) as HTMLVideoElement;
    videoWrapper.style.opacity = "1";
    video.loop = true;
    try {
      await video.play();
    } catch (e) {
      videoWrapper.style.opacity = "0";
    }
  }
};

const handleMouseleave = (event: MouseEvent) => {
  const target = event.target;
  if (target instanceof Element) {
    const image = target.querySelector("img") as HTMLImageElement;
    const videoWrapper = target.querySelector(
      ".hovered-video"
    ) as HTMLDivElement;
    const video = target.querySelector(
      ".hovered-video video"
    ) as HTMLVideoElement;
    videoWrapper.style.opacity = "0";
    videoWrapper.style.transition = "opacity 0.5s linear 0s";
    video.pause();
    video.currentTime = 0;
  }
};

export default {
  props: {
    title: String,
    description: String,
    thumbnail: String,
    demo: String,
    link: String,
  },
  mounted() {
    // Create event listeners
    const element = this.$el;

    element.addEventListener("mouseenter", handleMouseenter);

    element.addEventListener("mouseleave", handleMouseleave);
  },
  unmounted() {
    // Destroy event listeners
    const element = this.$el;

    element.removeEventListener("mouseenter", handleMouseenter);
    element.removeEventListener("mouseleave", handleMouseleave);
  },
};
</script>

<style scoped lang="scss"></style>
