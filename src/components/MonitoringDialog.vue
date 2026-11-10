<script setup>
import { ref } from "vue";
import { monitorTools, monitoringChapters as chapters } from "../data/monitoring.js";
import { useProjectDialog } from "../composables/useProjectDialog.js";
import { useChapterNav } from "../composables/useChapterNav.js";

const current = ref(0);
const pad = (n) => String(n).padStart(2, "0");

const { dialog, open, close, handleClosed } = useProjectDialog({
  hash: "monitoring-details",
  onOpen() {
    current.value = 0;
  },
});
const { scroller, nav, jump, sync } = useChapterNav(current, (i) => {
  current.value = i;
});

defineExpose({ open });
</script>

<template>
  <dialog
    ref="dialog"
    id="monitoring-details"
    class="project-dialog monitor-dialog"
    aria-labelledby="monitor-title"
    @close="handleClosed"
    @cancel.prevent="close"
    @click.self="close"
  >
    <header class="dialog-bar">
      <span>Projekte <b>/</b> Monitoring</span>
      <button type="button" aria-label="Projektansicht schliessen" autofocus @click="close">×</button>
    </header>

    <nav ref="nav" class="chapter-nav" aria-label="Monitoring-Kapitel">
      <button
        v-for="(chapter, i) in chapters"
        :key="chapter.title"
        type="button"
        :aria-current="current === i ? 'location' : undefined"
        @click="jump(i)"
      >
        {{ chapter.short }}
      </button>
    </nav>

    <div ref="scroller" class="doc-scroll monitor-body" @scroll.passive="sync">
      <p class="case-label">DATENANALYSE / MONITORING</p>
      <h3 id="monitor-title">Keystone SDA Monitoring Dashboard</h3>
      <div class="project-tools">
        <strong>Technologien &amp; Tools</strong>
        <ul>
          <li v-for="tool in monitorTools" :key="tool">{{ tool }}</li>
        </ul>
      </div>

      <section
        v-for="(chapter, i) in chapters"
        :key="chapter.title"
        data-chapter
        class="doc-copy"
        :class="{ 'opening-chapter': i === 0 }"
      >
        <header class="chapter-heading">
          <span class="chapter-number">{{ pad(i + 1) }} / {{ pad(chapters.length) }}</span>
          <h4>{{ chapter.title }}</h4>
          <p>{{ chapter.intro }}</p>
        </header>
        <figure class="chapter-figure">
          <img
            class="chapter-shot"
            :src="chapter.image"
            :alt="chapter.title"
            loading="lazy"
            decoding="async"
            draggable="false"
            @contextmenu.prevent
          />
          <figcaption>{{ chapter.caption }}</figcaption>
        </figure>
        <div class="chapter-notes" v-html="chapter.body"></div>
      </section>
    </div>
  </dialog>
</template>
