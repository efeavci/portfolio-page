import { ref } from "vue";
import { prefersReducedMotion } from "./useProjectDialog.js";

/**
 * Kapitelnavigation für scrollbare Projektansichten.
 * `current` ist der aktive Index, `select(i)` wird beim Scrollen aufgerufen.
 */
export function useChapterNav(current, select) {
  const scroller = ref(null);
  const nav = ref(null);

  const chapters = () => [...scroller.value.querySelectorAll("[data-chapter]")];

  function jump(index) {
    const box = scroller.value;
    const target = chapters()[index];
    box.scrollTo({
      top: box.scrollTop + target.getBoundingClientRect().top - box.getBoundingClientRect().top,
      behavior: prefersReducedMotion() ? "instant" : "smooth",
    });
  }

  function revealButton(index) {
    const button = nav.value.children[index];
    const rect = button.getBoundingClientRect();
    const bounds = nav.value.getBoundingClientRect();
    if (rect.left < bounds.left || rect.right > bounds.right) {
      nav.value.scrollLeft += rect.left - bounds.left - 8;
    }
  }

  function sync() {
    const box = scroller.value;
    const list = chapters();
    const top = box.getBoundingClientRect().top + 12;
    let index = list.reduce((n, el, j) => (el.getBoundingClientRect().top <= top ? j : n), 0);
    const atEnd = box.scrollTop > 0 && box.scrollHeight - box.clientHeight - box.scrollTop < 2;
    if (atEnd) index = list.length - 1;
    if (index === current.value) return;
    select(index);
    revealButton(index);
  }

  return { scroller, nav, jump, sync };
}
