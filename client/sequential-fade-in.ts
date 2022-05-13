export const sequentialFadeIn = (className: string) => {
  if (typeof window !== "undefined") {
    Array.prototype.slice
      .call(document.querySelectorAll(`.${className}`))
      .forEach((el: HTMLElement, index: number) => {
        setTimeout(() => {
          el.classList.remove("load");
        }, 300 * (index + 1));
      });
  }
};
