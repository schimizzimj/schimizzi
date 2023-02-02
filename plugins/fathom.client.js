import VueFathom from "@ubclaunchpad/vue-fathom";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: "FOJEAWOJ",
    settings: {
      url: "https://excellent-wow.schimizzi.io/script.js",
      spa: "history",
    },
  });
});
