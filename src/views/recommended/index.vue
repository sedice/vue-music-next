<template>
  <div v-loading:[loadingText]="loading" class="recommended">
    <Scroll class="scroll-content">
      <div>
        <div class="slider-wrapper">
          <Slider v-if="sliders.length > 0" :sliders="sliders" />
        </div>
        <div class="recommend-list">
          <h1 v-show="!loading" class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in albums" :key="item.id" class="item">
              <div class="icon">
                <img v-lazy="item.pic" width="60" height="60" />
              </div>
              <div class="text">
                <h2 class="name">{{ item.username }}</h2>
                <p class="title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, toRefs } from "vue";
import Slider from "@/components/base/slider/slider.vue";
import Scroll from "@/components/base/scroll/scroll.vue";
import { getRecommend, IRecommendedResult } from "@/service/recommended";

const reactiveResult = reactive<IRecommendedResult>({
  sliders: [],
  albums: [],
});

const loading = ref(false);
const loadingText = ref("加载中...");
onMounted(async () => {
  loading.value = true;
  const { sliders, albums } = await getRecommend();
  loading.value = false;
  reactiveResult.sliders = sliders;
  reactiveResult.albums = albums;
});

const { sliders, albums } = toRefs(reactiveResult);
</script>

<style lang="scss" scoped>
.recommended {
  height: calc(100vh - 87px);
  .scroll-content {
    height: 100%;
    overflow: hidden;
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 10px 20px;
        /* border: 1px solid red; */
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $color-text;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
