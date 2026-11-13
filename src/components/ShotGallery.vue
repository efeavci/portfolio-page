<script setup>
import { ref } from "vue";

const props = defineProps({
  images: { type: Array, required: true },
  eager: { type: Boolean, default: false },
});
const emit = defineEmits(["zoom"]);

const index = ref(0);

function step(direction) {
  const count = props.images.length;
  index.value = (index.value + direction + count) % count;
}
</script>

<template>
  <figure class="shot">
    <button
      class="shot-stage"
      type="button"
      :aria-label="`Bild vergrössern: ${images[index].caption}`"
      @click="emit('zoom', index)"
      @contextmenu.prevent
    >
      <Transition name="picture">
        <img
          :key="images[index].src"
          :src="images[index].src"
          :alt="images[index].alt"
          :loading="eager ? undefined : 'lazy'"
          decoding="async"
          draggable="false"
        />
      </Transition>
      <span class="shot-zoom" aria-hidden="true">⤢</span>
    </button>
    <figcaption>
      <span>{{ images[index].caption }}</span>
      <div v-if="images.length > 1" class="gallery-controls">
        <button
          class="arrow"
          type="button"
          aria-label="Vorheriges Bild"
          @click="step(-1)"
        >
          ‹
        </button>
        <span>{{ index + 1 }} / {{ images.length }}</span>
        <button
          class="arrow"
          type="button"
          aria-label="Nächstes Bild"
          @click="step(1)"
        >
          ›
        </button>
      </div>
    </figcaption>
  </figure>
</template>
