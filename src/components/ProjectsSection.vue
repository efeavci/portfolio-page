<script setup>
import { onMounted, ref } from "vue";
import EcoChargeDialog from "./EcoChargeDialog.vue";
import MonitoringDialog from "./MonitoringDialog.vue";
import { ecochargeCover, ecochargeTools } from "../data/ecocharge.js";
import { monitoringCover, monitorTools } from "../data/monitoring.js";

const ecoDialog = ref(null);
const ecoTrigger = ref(null);
const monitorDialog = ref(null);
const monitorTrigger = ref(null);

const openEcoCharge = () => ecoDialog.value.open(ecoTrigger.value);
const openMonitoring = () => monitorDialog.value.open(monitorTrigger.value);

// Ein Klick auf die Karte öffnet das Projekt, ausser er trifft einen Link oder Button.
const fromCard = (event, openFn) => {
  if (!event.target.closest("a, button")) openFn();
};

onMounted(() => {
  if (location.hash === "#ecocharge-details") openEcoCharge();
  if (location.hash === "#monitoring-details") openMonitoring();
});
</script>

<template>
  <section class="section projects" id="work">
    <header class="section-heading">
      <p class="eyebrow">PROJEKTE</p>
      <h2>Meine Projekte</h2>
    </header>

    <div class="projects-grid">
      <article class="project-card" @click="fromCard($event, openEcoCharge)">
        <div class="project-image">
          <img :src="ecochargeCover" alt="EcoCharge – Smart-Charging-Webapplikation" loading="lazy" decoding="async" />
        </div>
        <div class="project-content">
          <p class="meta">PWA · SMART CHARGING</p>
          <h3>EcoCharge</h3>
          <p>EcoCharge vergleicht Strompreise und Solarertrag und schlägt passende Ladezeiten für das Elektroauto vor.</p>
          <div class="tags">
            <span v-for="tool in ecochargeTools" :key="tool">{{ tool }}</span>
          </div>
          <div class="project-actions">
            <button ref="ecoTrigger" class="project-link open-project" type="button" aria-haspopup="dialog" @click="openEcoCharge">
              Projekt ansehen →
            </button>
            <a class="project-link" href="https://ecocharge.free.nf/login.php" target="_blank" rel="noopener noreferrer"
              >Live Demo ↗</a
            >
          </div>
        </div>
      </article>

      <article class="project-card" @click="fromCard($event, openMonitoring)">
        <div class="project-image monitor-cover">
          <img
            :src="monitoringCover"
            alt="Titelbild des Keystone SDA Monitoring Dashboards"
            loading="lazy"
            decoding="async"
            draggable="false"
            @contextmenu.prevent
          />
        </div>
        <div class="project-content">
          <p class="meta">DATENANALYSE · DASHBOARD</p>
          <h3>Monitoring</h3>
          <p>Artikelproduktion, Publisher und Bildnutzung im Überblick.</p>
          <div class="tags">
            <span v-for="tool in monitorTools" :key="tool">{{ tool }}</span>
          </div>
          <div class="project-actions">
            <button ref="monitorTrigger" class="project-link open-project" type="button" aria-haspopup="dialog" @click="openMonitoring">
              Projekt ansehen →
            </button>
          </div>
        </div>
      </article>
    </div>

    <EcoChargeDialog ref="ecoDialog" />
    <MonitoringDialog ref="monitorDialog" />
  </section>
</template>

<style scoped>
.projects-grid { align-items: stretch; }
.project-card { display: flex; flex-direction: column; min-width: 0; cursor: pointer; }
.project-image { flex: none; height: auto; aspect-ratio: 16 / 9; }
.project-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
.monitor-cover { background: #15252b; }
.project-content { display: flex; flex: 1; flex-direction: column; align-items: flex-start; }
.project-content .tags { margin-bottom: 18px; }
.project-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px 24px; margin-top: auto; }
.project-link { margin-top: 0; padding-block: 5px; }
.project-link:hover { text-decoration: underline; }
.open-project { background: none; border: 0; cursor: pointer; font-family: inherit; }

@media (min-width: 901px) {
  .projects-grid .project-card { display: grid; grid-row: span 6; grid-template-rows: subgrid; row-gap: 0; }
  .projects-grid .project-content { display: grid; grid-row: span 5; grid-template-rows: subgrid; row-gap: 0; }
  .projects-grid .project-content > * { align-self: start; }
  .projects-grid .project-actions { margin-top: 0; }
}
</style>
