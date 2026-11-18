<script setup>
import { ref } from "vue";
import { hotChapters as chapters, hotTools } from "../data/hotchilli.js";
import { useProjectDialog } from "../composables/useProjectDialog.js";
import { useChapterNav } from "../composables/useChapterNav.js";
const current = ref(0);
const { dialog, open, close, handleClosed } = useProjectDialog({ hash: "hotchilli-details", onOpen() { current.value = 0; } });
const { scroller, nav, jump, sync } = useChapterNav(current, (i) => { current.value = i; });
defineExpose({ open });
</script>

<template>
  <dialog ref="dialog" id="hotchilli-details" class="project-dialog hotchilli-dialog" aria-labelledby="hotchilli-title" @close="handleClosed" @cancel.prevent="close" @click.self="close">
    <header class="dialog-bar">
      <span>Projekte <b>/</b> Hot Chilli Pepper</span>
      <button type="button" aria-label="Projektansicht schliessen" autofocus @click="close">×</button>
    </header>
    <nav ref="nav" class="chapter-nav" aria-label="Hot Chilli Pepper Kapitel">
      <button v-for="(chapter, i) in chapters" :key="chapter.title" type="button" :aria-current="current === i ? 'location' : undefined" @click="jump(i)">{{ chapter.short }}</button>
    </nav>
    <div ref="scroller" class="doc-scroll" @scroll.passive="sync">
      <section v-for="(chapter, i) in chapters" :key="chapter.title" data-chapter class="story" :class="{ 'story-intro': i === 0, 'story-text-only': true }">
        <div class="story-copy">
          <template v-if="i === 0">
            <p class="case-label">WEBSITE · GASTRONOMIE</p>
            <h3 id="hotchilli-title">Hot Chilli Pepper</h3>
            <p class="story-note">Restaurant-Website Ostermundigen · 18. November 2026 · Live, in Weiterentwicklung</p>
            <a class="hot-live" href="https://hotchillipepper.ch/" target="_blank" rel="noopener noreferrer">Website besuchen ↗</a>
          </template>
          <p class="chapter-number">{{ String(i + 1).padStart(2, "0") }} / {{ String(chapters.length).padStart(2, "0") }}</p>
          <h4>{{ chapter.title }}</h4>
          <p class="story-lead">{{ chapter.lead }}</p>
          <ul class="story-points"><li v-for="point in chapter.points" :key="point">{{ point }}</li></ul>
          <div v-if="i === 0" class="project-tools"><strong>Technologien &amp; Tools</strong><ul><li v-for="tool in hotTools" :key="tool">{{ tool }}</li></ul></div>
        </div>
      </section>
    </div>
  </dialog>
</template>
<style scoped>
.hotchilli-dialog { --project-accent: #d8b56c; }
.hotchilli-dialog .case-label, .hotchilli-dialog .chapter-number { color: #d8b56c; }
.hot-live { display: inline-flex; margin-top: 18px; color: #e5c681; font-weight: 650; }
.hot-live:hover { text-decoration: underline; }
</style>