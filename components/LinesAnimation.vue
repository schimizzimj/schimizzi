<template>
  <svg :width="width" :height="height">
    <defs>
      <linearGradient
        v-for="(line, index) in data"
        :id="`LinearGradient-${this.uid}-${index}`"
      >
        <stop stop-color="#f2f2f7" offset="0%"></stop>
        <stop :stop-color="line.color" offset="50%"></stop>
        <stop stop-color="#f2f2f7" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      v-for="(line, index) in data"
      :d="line.d"
      stroke="none"
      class="mix-blend-multiply"
      :fill="`url(#LinearGradient-${this.uid}-${index})`"
    />
  </svg>
</template>

<script>
import * as d3 from "d3";
import { interpolatePath } from "d3-interpolate-path";

export default {
  data() {
    return {
      xScale: null,
      yScale: null,
      data: [],
      uid: null,
      timer: null,
      lineGenerator: null,
    };
  },
  props: {
    height: Number,
    width: Number,
    numberOfLines: {
      type: Number,
      default: 3,
    },
  },
  mounted() {
    this.uid = generateUID();
    this.xScale = d3.scaleLinear().domain([0, 9]).range([0, this.width]);
    this.yScale = d3.scaleLinear().domain([0, 100]).range([0, this.height]);

    for (let i = 0; i < this.numberOfLines; i++) {
      const lineData = [];
      for (let j = 0; j < 10; j++) {
        lineData.push({
          x: j,
          y: scaledRandom(0, 100),
        });
      }
      this.data.push(lineData);
    }

    this.lineGenerator = d3
      .line()
      .curve(d3.curveCardinal)
      .x((d) => this.xScale(d.x))
      .y((d) => this.yScale(d.y));

    this.data.forEach((d) => {
      d.color = `rgb(${scaledRandom(0, 255)}, ${scaledRandom(
        0,
        255
      )}, ${scaledRandom(0, 255)})`;
      d.d = this.lineGenerator(d);
    });

    this.timer = setInterval(() => {
      this.regenerateData();
    }, 5000);
  },
  unmounted() {
    clearInterval(this.timer);
  },
  methods: {
    regenerateData() {
      for (let i = 0; i < this.numberOfLines; i++) {
        for (let j = 0; j < 10; j++) {
          this.data[i][j].y = scaledRandom(0, 100);
        }
        this.data[i].d = this.lineGenerator(this.data[i]);
      }
      this.animate();
    },
    animate() {
      let that = this;
      d3.selectAll("path")
        .data(this.data)
        .transition()
        .duration(1000)
        .attrTween("d", function (d) {
          let previous = d3.select(this).attr("d");
          let current = that.lineGenerator(d);
          return interpolatePath(previous, current);
        });
    },
  },
};
</script>
