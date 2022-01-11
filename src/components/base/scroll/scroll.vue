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
const props = defineProps<IProps>();

const emits = defineEmits(["scroll"]);
const rootRef = ref(null);
const { scroll } = useScroll(rootRef, props, emits);

// import useScroll from "./useScroll";
// import { ref } from "vue";
// export default {
//   name: "Scroll",
//   props: {
//     click: {
//       type: Boolean,
//       default: () => true,
//     },
//     probeType: {
//       type: Number,
//       default: () => 0,
//     },
//   },
//   emits: ["scroll"],
//   setup(props, { emit }) {
//     const rootRef = ref(null);
//     const { scroll } = useScroll(rootRef, props, emit);
//     return {
//       rootRef,
//       scroll,
//     };
//   },
// };
</script>

<style></style>
