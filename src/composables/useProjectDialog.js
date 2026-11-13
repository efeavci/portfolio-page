import { ref } from "vue";

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Gemeinsames Verhalten der Projekt-Dialoge: Öffnen, animiertes Schliessen
 * (Klick, Escape, Hintergrund) und Fokus-Rückgabe an das auslösende Element.
 */
export function useProjectDialog({ hash, onOpen, onClosed } = {}) {
  const dialog = ref(null);
  let returnFocus = null;

  function open(trigger) {
    const panel = dialog.value;
    if (!panel || panel.open) return;
    returnFocus = trigger ?? null;
    delete panel.dataset.closing;
    onOpen?.();
    panel.showModal();
    panel.querySelector(".doc-scroll").scrollTop = 0;
  }

  async function close() {
    const panel = dialog.value;
    if (!panel?.open || panel.dataset.closing) return;
    panel.dataset.closing = "true";

    // Hintergrund bleibt inaktiv, bis Panel und Backdrop ausgeblendet sind.
    getComputedStyle(panel).opacity;
    const transitions = panel
      .getAnimations({ subtree: true })
      .filter((animation) => "transitionProperty" in animation);
    await Promise.allSettled(transitions.map((animation) => animation.finished));
    if (panel.open) panel.close();
  }

  function handleClosed() {
    onClosed?.();
    if (hash && location.hash === `#${hash}`) {
      history.replaceState(history.state, "", "#work");
    }
    returnFocus?.focus({ preventScroll: true });
    returnFocus = null;
  }

  return { dialog, open, close, handleClosed };
}
