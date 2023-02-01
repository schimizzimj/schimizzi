<template>
  <div class="blobs">
    <canvas id="blobs-canvas" />
  </div>
</template>

<script>
export default {
  name: "Blobs",
  data() {
    return {
      colors: ["0x1F5ABD", "0x5435B3", "0x8910A8"],
      app: "",
      colorPalette: "",
    };
  },
  mounted() {
    this.app = new this.$pixi.Application({
      view: document.getElementById("blobs-canvas"),
      resizeTo: this.$el.parentElement,
      transparent: true,
    });
    this.app.stage.filters = [new this.$kawase(25, 5, true)];

    const orbs = [];
    for (let i = 0; i < 15; i++) {
      const orb = new this.$orb(
        this.colors[~~scaledRandom(0, this.colors.length)]
      );
      this.app.stage.addChild(orb.graphics);
      orbs.push(orb);
    }

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.app.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  },
};
</script>

<style scoped>
#blobs-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>
