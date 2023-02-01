<template>
  <section class="bg-black min-h-screen py-32 text-center">
    <h1 class="text-gray-50 text-5xl">Some stuff I've built</h1>
    <ul
      class="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8"
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
