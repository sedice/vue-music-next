import BScroll, { BScrollInstance } from "@better-scroll/core";
import { Ref } from "vue";
import Slide from "@better-scroll/slide";

import { onMounted, ref, onUnmounted } from "vue";

BScroll.use(Slide);
export default function useSlider(wrapperRef: Ref<HTMLElement | null>) {
  const slider = ref<BScrollInstance | null>(null);
  const currentPageIndex = ref(0);
  onMounted(() => {
    const sliderValue = (slider.value = new BScroll(wrapperRef.value!, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: {
        loop: true,
        autoplay: true,
      },
    }));
    sliderValue.on("slideWillChange", (page: any) => {
      currentPageIndex.value = page.pageX;
    });
  });
  onUnmounted(() => {
    slider.value?.destroy();
  });
  return {
    slider,
    currentPageIndex,
  };
}
