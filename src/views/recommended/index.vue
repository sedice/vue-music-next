<template>
  <div class="slider-wrapper">
    <Slider v-if="reactiveSliders.length > 0" :sliders="reactiveSliders" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Slider from "@/components/base/slider/slider.vue";
import { getRecommend, IRecommendedResult } from "@/service/recommended";

const reactiveSliders = ref<IRecommendedResult["sliders"]>([]);

onMounted(async () => {
  const { sliders } = await getRecommend();
  reactiveSliders.value = sliders;
});
</script>

<style lang="scss" scoped>
.slider-wrapper {
  width: 100%;
  margin-top: 10px;
}
</style>
