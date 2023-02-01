<template>
  <section class="bg-[#212121] text-center py-16 sm:py-20 md:py-32">
    <h1 class="text-gray-50 text-5xl">Some stuff I've built</h1>
    <ul
      class="pt-12 grid max-w-[26rem] sm:max-w-[52.5rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :thumbnail="project.thumbnail"
        :demo="project.demo"
        :link="project.link"
      />
    </ul>
    <div class="pt-12">
      <a href="https://github.com/schimizzimj" target="_blank" class="group"
        ><h2
          class="text-xl md:text-3xl text-gray-500 group-hover:text-[#8910a8] font-sans font-semibold"
        >
          View More
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
          /></h2
      ></a>
    </div>
  </section>
</template>

<script>
import ProjectsData from "@/assets/projects.json";
export default {
  data: function () {
    return {
      projects: ProjectsData,
    };
  },
};
</script>

<style></style>
