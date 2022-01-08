<template>
  <div class="nav_wrapper">
    <router-link
      v-for="nav in navList"
      :key="nav.title"
      :to="nav.path"
      class="item_wrapper"
      active-class="active_nav"
    >
      <span>{{ nav.title }}</span>
    </router-link>
  </div>
  <div class="bar"></div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface INavItem {
  title: string;
  path: string;
}

const navList = reactive<INavItem[]>([
  {
    title: "推荐",
    path: "/recommended",
  },
  {
    title: "歌手",
    path: "/singer",
  },
  {
    title: "排行",
    path: "/rank",
  },
  {
    title: "搜索",
    path: "/serch",
  },
]);
</script>

<style lang="scss" scoped>
.nav_wrapper {
  display: flex;
  justify-content: space-around;
  .item_wrapper {
    position: relative;
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
    border-bottom: 2px solid transparent;
    span {
      letter-spacing: 0.2em;
    }
    &.active_nav {
      border-color: $color-theme;
    }
  }
}
</style>
