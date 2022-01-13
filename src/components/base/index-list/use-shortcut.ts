import { ref, computed, Ref } from "vue";
import type { IProps } from "./index-list.vue";
import Scroll from "../scroll/scroll.vue";

export default function useShortcut(
  props: IProps,
  groupRef: Ref<HTMLElement | null>
) {
  const ANCHOR_HEIGHT = 20;
  const scrollRef = ref<InstanceType<typeof Scroll> | null>(null);
  const shortcutList = computed(() => {
    return props.data.map((group) => group.title);
  });

  const touch = {} as any;
  function onShortcutTouchStart(e: TouchEvent) {
    const anchorIndex = parseInt((e as any).target.dataset.index);
    touch.y1 = e.touches[0].pageY;
    touch.anchorIndex = anchorIndex;
    scrollTo(anchorIndex);
  }

  function onShortcutTouchMove(e: TouchEvent) {
    touch.y2 = e.touches[0].pageY;
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0;
    const anchorIndex = touch.anchorIndex + delta;
    scrollTo(anchorIndex);
  }
  function scrollTo(index: number) {
    if (isNaN(index)) {
      return;
    }
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index));
    const targetEl = groupRef.value!.children[index] as HTMLElement;
    const scroll = scrollRef.value!.scroll;
    scroll!.scrollToElement(targetEl, 0, 0, 0);
  }
  return {
    shortcutList,
    onShortcutTouchStart,
    scrollRef,
    onShortcutTouchMove,
  };
}
