import { Directive, createApp } from "vue";
import Loading from "./loading.vue";
import { addClass, removeClass } from "@/utils";

const relativeCls = "v-loading-wrapper";

interface LoadingContainer extends HTMLElement {
  instance: any;
}

const loadingDirective: Directive<HTMLElement, boolean> = {
  mounted(_el, { value, arg }) {
    const el = _el as LoadingContainer;
    const app = createApp(Loading);
    const instance = app.mount(document.createElement("div"));
    el.instance = instance;
    const title = arg;
    if (typeof title !== "undefined") {
      el.instance.setTitle(title);
    }
    if (value) {
      append(el);
    }
  },
  updated(_el, { value, oldValue, arg }) {
    const el = _el as LoadingContainer;
    const title = arg;
    if (typeof title !== "undefined") {
      el.instance.setTitle(title);
    }
    if (value !== oldValue) {
      value ? append(el) : remove(el);
    }
  },
};

export default loadingDirective;

function append(el: LoadingContainer) {
  const style = getComputedStyle(el);
  if (["absolute", "fixed", "relative"].indexOf(style.position) === -1) {
    addClass(el, relativeCls);
  }
  el.appendChild(el.instance.$el);
}

function remove(el: LoadingContainer) {
  removeClass(el, relativeCls);
  el.removeChild(el.instance.$el);
}
