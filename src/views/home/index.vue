<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import Nav from "@/components/nav/index.vue";
</script>
