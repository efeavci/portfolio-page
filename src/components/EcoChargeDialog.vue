<script setup>
import { onBeforeUnmount, ref } from "vue";
import { ecochargeScreens as screens, ecochargeTools } from "../data/ecocharge.js";
import { prefersReducedMotion, useProjectDialog } from "../composables/useProjectDialog.js";
import { useChapterNav } from "../composables/useChapterNav.js";

const active = ref(0);
const slide = ref(0);
let timer;
let manual = false;

function stopTimer() {
  clearInterval(timer);
}

function selectScreen(index) {
  stopTimer();
  active.value = index;
  slide.value = 0;
  const count = screens[index].images.length;
  if (count > 1 && !manual && !prefersReducedMotion()) {
    timer = setInterval(() => {
      slide.value = (slide.value + 1) % count;
    }, 3000);
  }
}

function step(index, direction) {
  if (active.value !== index) selectScreen(index);
  manual = true;
  stopTimer();
  const count = screens[index].images.length;
  slide.value = (slide.value + direction + count) % count;
}

const shownSlide = (index) => (active.value === index ? slide.value : 0);

const { dialog, open, close, handleClosed } = useProjectDialog({
  hash: "ecocharge-details",
  onOpen() {
    manual = false;
    selectScreen(0);
  },
  onClosed: stopTimer,
});
const { scroller, nav, jump, sync } = useChapterNav(active, selectScreen);

onBeforeUnmount(stopTimer);
defineExpose({ open });
</script>

<template>
  <dialog
    ref="dialog"
    id="ecocharge-details"
    class="project-dialog eco-dialog"
    aria-labelledby="ecocharge-title"
    @close="handleClosed"
    @cancel.prevent="close"
    @click.self="close"
  >
    <header class="dialog-bar">
      <span>Projekte <b>/</b> EcoCharge</span>
      <button type="button" aria-label="Projektansicht schliessen" autofocus @click="close">×</button>
    </header>

    <nav ref="nav" class="chapter-nav" aria-label="EcoCharge-Kapitel">
      <button
        v-for="(screen, i) in screens"
        :key="screen.title"
        type="button"
        :aria-current="active === i ? 'location' : undefined"
        @click="jump(i)"
      >
        {{ screen.title }}
      </button>
    </nav>

    <div ref="scroller" class="doc-scroll" @scroll.passive="sync">
      <section
        v-for="(screen, i) in screens"
        :key="screen.title"
        data-chapter
        class="case-layout"
        :class="{ cover: i === 0 }"
      >
        <div class="case-copy">
          <template v-if="i === 0">
            <p class="case-label">SMART CHARGING · PWA</p>
            <h3 id="ecocharge-title">EcoCharge</h3>
          </template>
          <div>
            <h4 class="case-lead">{{ screen.heading || screen.title }}</h4>
            <p class="case-description">{{ screen.text }}</p>
            <div v-if="i === 0" class="project-tools">
              <strong>Technologien &amp; Tools</strong>
              <ul>
                <li v-for="tool in ecochargeTools" :key="tool">{{ tool }}</li>
              </ul>
            </div>
          </div>
          <div v-if="i === 0" class="resource-links">
            <a href="https://ecocharge.free.nf/login.php" target="_blank" rel="noopener noreferrer">Live-Demo ↗</a>
            <a
              href="https://showroom-bcs.digisus-lab.ch/ecocharge-smartes-laden-fur-dein-elektroauto/"
              target="_blank"
              rel="noopener noreferrer"
              >Dokumentation ↗</a
            >
          </div>
        </div>

        <figure class="screen-preview">
          <div class="screen-stage" @contextmenu.prevent>
            <Transition name="picture">
              <img
                :key="screen.images[shownSlide(i)]"
                :src="screen.images[shownSlide(i)]"
                :alt="`EcoCharge – ${screen.title}, Bild ${shownSlide(i) + 1}`"
                :loading="i === 0 ? undefined : 'lazy'"
                decoding="async"
                draggable="false"
              />
            </Transition>
          </div>
          <figcaption v-if="screen.images.length > 1">
            <div class="gallery-controls">
              <button class="arrow" type="button" aria-label="Vorheriges Bild" @click="step(i, -1)">‹</button>
              <span>{{ shownSlide(i) + 1 }} / {{ screen.images.length }}</span>
              <button class="arrow" type="button" aria-label="Nächstes Bild" @click="step(i, 1)">›</button>
            </div>
          </figcaption>
        </figure>
      </section>
    </div>
  </dialog>
</template>
