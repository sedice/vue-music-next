export const addClass = (el: HTMLElement, className: string) => {
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
};

export const removeClass = (el: HTMLElement, className: string) => {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  }
};
