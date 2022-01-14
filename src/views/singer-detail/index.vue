<template>
  <div class="singer-detail">
    <music-list
      :songs="songs"
      :title="singer.name"
      :pic="singer.pic"
      :loading="loading"
    ></music-list>
  </div>
</template>

<script lang="ts">
export default {
  name: "SingerDetail",
};
</script>

<script lang="ts" setup>
import { ref, onMounted, toRefs } from "vue";
import { processSongs, getSingerDetail } from "@/service/song";
import { ISinger } from "@/service/singer";
import { ISong } from "@/service/song";
import MusicList from "@/components/music-list/music-list.vue";

const props = defineProps<{
  singer: ISinger;
}>();
const { singer } = toRefs(props);
const songs = ref<ISong[]>([]);
const loading = ref(true);
onMounted(async () => {
  const result = await getSingerDetail(singer.value.mid);
  const list = await processSongs(result.songs);
  songs.value = list;
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
