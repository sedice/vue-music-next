<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Scroll",
};
</script>

<script setup lang="ts">
import useScroll from "./useScroll";
import { ref } from "vue";

interface IProps {
  click: true;
  probeType: number;
}
const props = withDefaults(defineProps<IProps>(), {
  click: true,
  probeType: 0,
});

const emits = defineEmits(["scroll"]);
const rootRef = ref(null);
const { scroll } = useScroll(rootRef, props, emits);

defineExpose({
  scroll,
});
</script>

<style></style>
