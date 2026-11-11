<script setup>
import { ref } from "vue";
import {
  monitorTools,
  monitoringChapters as chapters,
} from "../data/monitoring.js";
import { useProjectDialog } from "../composables/useProjectDialog.js";
import { useChapterNav } from "../composables/useChapterNav.js";
import ShotGallery from "./ShotGallery.vue";
import ImageLightbox from "./ImageLightbox.vue";

const current = ref(0);
const lightbox = ref(null);
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

const zoom = (chapter, index) => lightbox.value.open(chapter.images, index);

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
      <button
        type="button"
        aria-label="Projektansicht schliessen"
        autofocus
        @click="close"
      >
        ×
      </button>
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

    <div ref="scroller" class="doc-scroll" @scroll.passive="sync">
      <section
        v-for="(chapter, i) in chapters"
        :key="chapter.title"
        data-chapter
        class="story"
        :class="{
          'story-intro': i === 0,
          'story-text-only': !chapter.images.length,
        }"
      >
        <div class="story-copy">
          <template v-if="i === 0">
            <p class="case-label">DATENANALYSE · DASHBOARD</p>
            <h3 id="monitor-title">Keystone SDA Monitoring</h3>
          </template>
          <p class="chapter-number">
            {{ pad(i + 1) }} / {{ pad(chapters.length) }}
          </p>
          <h4>{{ chapter.title }}</h4>
          <p class="story-lead">{{ chapter.lead }}</p>

          <div v-if="chapter.stat" class="story-stat">
            <strong>{{ chapter.stat.value }}</strong>
            <span>{{ chapter.stat.label }}</span>
          </div>

          <ul v-if="chapter.points" class="story-points">
            <li v-for="point in chapter.points" :key="point">{{ point }}</li>
          </ul>

          <div v-if="i === 0" class="project-tools">
            <strong>Technologien &amp; Tools</strong>
            <ul>
              <li v-for="tool in monitorTools" :key="tool">{{ tool }}</li>
            </ul>
          </div>
          <p v-if="i === 0" class="story-note">
            Internes Tool – keine öffentliche Demo
          </p>

          <div v-if="chapter.todo" class="story-todo">
            <strong>Noch zu ergänzen</strong>
            <ul>
              <li v-for="item in chapter.todo" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <ShotGallery
          v-if="chapter.images.length"
          :images="chapter.images"
          :eager="i === 0"
          @zoom="zoom(chapter, $event)"
        />
      </section>
    </div>

    <ImageLightbox ref="lightbox" />
  </dialog>
</template>
