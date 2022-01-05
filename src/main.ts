import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

// 全局样式
import "@/assets/scss/index.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
