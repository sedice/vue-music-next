<template>
  <div ref="rootRef" class="slider-wrapper">
    <div class="slider-content">
      <div v-for="item in sliders" :key="item.id" class="slider-page">
        <a :href="item.link">
          <img :src="item.pic" alt="" />
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        v-for="(item, index) in sliders"
        :key="item.id"
        class="dot"
        :class="{ active: currentPageIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useSlider from "./useSlider";
import { IRecommendedResult } from "@/service/recommended";

const rootRef = ref(null);
const { currentPageIndex } = useSlider(rootRef);

withDefaults(
  defineProps<{
    sliders: IRecommendedResult["sliders"];
  }>(),
  {
    sliders: () => [],
  }
);
</script>

<style lang="scss" scoped>
.slider-wrapper {
  min-height: 1px;
  font-size: 0;
  touch-action: pan-y;
  position: relative;
  width: 100vw;
  overflow: hidden;
  .slider-content {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-page {
      display: inline-block;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      a {
        display: block;
        width: 100%;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .dots-wrapper {
    position: absolute;
    left: 50%;
    bottom: 10px;
    line-height: 10px;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;
      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>
