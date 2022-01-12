import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import LazyLoad from "vue3-lazy";
import DefaultImg from "@/assets/images/default.png";
import loadingDirective from "@/components/base/loading/directive";

// 全局样式
import "@/assets/scss/index.scss";

const app = createApp(App);
app.use(router).use(LazyLoad, {
  loading: DefaultImg,
});
app.directive("loading", loadingDirective);
app.mount("#app");
