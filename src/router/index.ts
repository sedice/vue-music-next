import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
import Singer from "@/views/singer/index.vue";
import Recommended from "@/views/recommended/index.vue";
import Serch from "@/views/serch/index.vue";
import Rank from "@/views/rank/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/recommended",
      },
      {
        path: "/recommended",
        component: Recommended,
      },
      {
        path: "/singer",
        component: Singer,
      },
      {
        path: "/serch",
        component: Serch,
      },
      {
        path: "/rank",
        component: Rank,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
