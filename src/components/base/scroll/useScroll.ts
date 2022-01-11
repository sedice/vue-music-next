import BScroll, { BScrollInstance } from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import { onMounted, ref, onUnmounted, Ref } from "vue";
BScroll.use(ObserveDOM);
export default function useScroll(
  wrapperRef: Ref<HTMLElement | null>,
  options: any,
  emit: any
) {
  const scroll = ref<BScrollInstance | null>(null);
  onMounted(() => {
    const scrollVal = (scroll.value = new BScroll(wrapperRef.value!, {
      observeDOM: true,
      ...options,
    }));
    if (options.probeType > 0) {
      scrollVal.on("scroll", (pos: any) => {
        emit("scroll", pos);
      });
    }
  });
  onUnmounted(() => {
    scroll.value?.destroy();
    scroll.value = null;
  });
  return {
    scroll,
  };
}
