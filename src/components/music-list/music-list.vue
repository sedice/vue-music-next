<template>
  <div class="music-list">
    <div class="back" @click="goBack">
      <i class="icon-back"></i>
    </div>
    <h1 class="title">{{ title }}</h1>
    <div ref="bgImageRef" class="bg-image" :style="bgImageStyle">
      <div class="filter"></div>
    </div>
    <Scroll v-loading="loading" class="list" :style="scrollStyle">
      <div class="song-list-wrapper">
        <SongList :songs="songs"></SongList>
      </div>
    </Scroll>
  </div>
</template>

<script lang="ts" setup>
import Scroll from "../base/scroll/scroll.vue";
import SongList from "../base/song-list/song-list.vue";
import { ISong } from "@/service/song";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const props = withDefaults(
  defineProps<{
    songs: ISong[];
    title: string;
    pic: string;
    loading: boolean;
  }>(),
  {
    songs: () => [],
  }
);

const imageHeight = ref(0);

const bgImageStyle = computed(() => {
  return {
    backgroundImage: `url(${props.pic})`,
  };
});

const scrollStyle = computed(() => {
  return {
    top: `${imageHeight.value}px`,
  };
});
const bgImageRef = ref<HTMLElement | null>(null);

onMounted(() => {
  imageHeight.value = bgImageRef.value!.clientHeight;
});

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>

<style lang="scss" scoped>
.music-list {
  position: relative;
  height: 100%;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 20;
    transform: translateZ(2px);
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    z-index: 20;
    transform: translateZ(2px);
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: $font-size-large;
    color: $color-text;
  }
  .bg-image {
    position: relative;
    width: 100%;
    transform-origin: top;
    background-size: cover;
    padding-top: 70%;
    height: 0;
    .play-btn-wrapper {
      position: absolute;
      bottom: 20px;
      z-index: 10;
      width: 100%;
      .play-btn {
        box-sizing: border-box;
        width: 135px;
        padding: 7px 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid $color-theme;
        color: $color-theme;
        border-radius: 100px;
        font-size: 0;
      }
      .icon-play {
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
        font-size: $font-size-medium-x;
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        font-size: $font-size-small;
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
  }
  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 0;
    .song-list-wrapper {
      padding: 20px 30px;
      background: $color-background;
    }
  }
}
</style>
