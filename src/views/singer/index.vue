<template>
  <div v-loading="!singerList.length" class="singer">
    <index-list :data="singerList" @select="selectSinger" />
    <router-view :singer="selectedSinger"></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "Singer",
};
</script>

<script setup lang="ts">
import { getSingerList, ISingerData, ISinger } from "@/service/singer";
import indexList from "@/components/base/index-list/index-list.vue";
import { ref, onMounted } from "vue";

const singerList = ref<ISingerData[]>([]);
const selectedSinger = ref<ISinger | null>(null);

onMounted(async () => {
  const result = await getSingerList();
  singerList.value = result.singers;
});

const selectSinger = (singer: ISinger) => {
  selectedSinger.value = singer;
  // this.$router.push({ path: `/singer/${singer.mid}` });
};
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
