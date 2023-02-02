import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCode,
  faCoffee,
  faCopyright,
  faHeart,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(
  faCode,
  faCoffee,
  faCopyright,
  faHeart,
  faGithub,
  faInstagram,
  faLinkedin,
  faFacebook,
  faArrowUpRightFromSquare
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
