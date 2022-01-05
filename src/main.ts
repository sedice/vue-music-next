import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

// 全局样式
import "./assets/styles/index.less";

const app = createApp(App);
app.use(router);
app.mount("#app");
