<script setup>
import { computed, ref } from "vue";

const dialog = ref(null);
const images = ref([]);
const index = ref(0);
let returnFocus = null;

const current = computed(() => images.value[index.value]);
const many = computed(() => images.value.length > 1);

function open(list, start = 0) {
  images.value = list;
  index.value = start;
  returnFocus = document.activeElement;
  dialog.value.showModal();
}

function step(direction) {
  const count = images.value.length;
  index.value = (index.value + direction + count) % count;
}

function onKeydown(event) {
  if (!many.value) return;
  if (event.key === "ArrowRight") step(1);
  if (event.key === "ArrowLeft") step(-1);
}

function onClose() {
  returnFocus?.focus({ preventScroll: true });
  returnFocus = null;
}

defineExpose({ open });
</script>

<template>
  <dialog
    ref="dialog"
    class="lightbox"
    aria-label="Bildansicht"
    @click.self="dialog.close()"
    @keydown="onKeydown"
    @close="onClose"
  >
    <button
      class="lightbox-close"
      type="button"
      aria-label="Bildansicht schliessen"
      autofocus
      @click="dialog.close()"
    >
      ×
    </button>
    <figure v-if="current" class="lightbox-figure" @click.self="dialog.close()">
      <img
        :src="current.src"
        :alt="current.alt"
        draggable="false"
        @contextmenu.prevent
      />
      <figcaption>
        <button
          v-if="many"
          class="arrow"
          type="button"
          aria-label="Vorheriges Bild"
          @click="step(-1)"
        >
          ‹
        </button>
        <span
          >{{ current.caption
          }}<template v-if="many">
            · {{ index + 1 }} / {{ images.length }}</template
          ></span
        >
        <button
          v-if="many"
          class="arrow"
          type="button"
          aria-label="Nächstes Bild"
          @click="step(1)"
        >
          ›
        </button>
      </figcaption>
    </figure>
  </dialog>
</template>
