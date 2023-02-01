import * as PIXI from "pixi.js";
import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";

export default ({ app }, inject) => {
  inject("pixi", PIXI);
  inject("kawase", KawaseBlurFilter);
};
