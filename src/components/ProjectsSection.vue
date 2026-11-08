<script setup>
import { onMounted, ref } from "vue";
import ecochargeCover from "../../assets/images/ecocharge/cover.png";
import smartcarConnect from "../../assets/images/ecocharge/smartcar_connect.png";
import vehicleSelection from "../../assets/images/ecocharge/vehicle_selection.png";
import chargingPlan from "../../assets/images/ecocharge/charging_plan1.png";
import settings from "../../assets/images/ecocharge/settings.png";
const screens = [
  { title: "Ladeplan", image: chargingPlan, text: "Strompreise und erwarteter Solarertrag zeigen, welche Ladefenster infrage kommen." },
  { title: "Verbindung", image: smartcarConnect, text: "Über Smartcar verbindet EcoCharge das Fahrzeug mit der App." },
  { title: "Fahrzeug", image: vehicleSelection, text: "Das ausgewählte Fahrzeug liefert den Batteriestand für die Ladeplanung." },
  { title: "Einstellungen", image: settings, text: "Wallbox-Leistung, Solaranlage und Ladepriorität lassen sich an die eigene Situation anpassen." }
];
const active = ref(0);
const dialog = ref(null);
const trigger = ref(null);

function openProject() {
  const panel = dialog.value;
  if (panel.open) return;
  active.value = 0;
  delete panel.dataset.closing;
  panel.showModal();
}

async function closeProject() {
  const panel = dialog.value;
  if (!panel.open || panel.dataset.closing) return;
  panel.dataset.closing = "true";

  // Keep the background inert until both the panel and backdrop have faded.
  getComputedStyle(panel).opacity;
  const transitions = panel.getAnimations({ subtree: true })
    .filter(animation => "transitionProperty" in animation);
  await Promise.allSettled(transitions.map(animation => animation.finished));
  if (panel.open) panel.close();
}

function restoreFocus() {
  if (location.hash === "#ecocharge-details") {
    history.replaceState(history.state, "", "#work");
  }
  trigger.value?.focus({ preventScroll: true });
}

onMounted(() => {
  if (location.hash === "#ecocharge-details") openProject();
});
</script>

<template>
  <section class="section projects" id="work">
    <header class="section-heading">
      <p class="eyebrow">PROJEKTE</p>
      <h2>Meine Projekte</h2>
    </header>

    <div class="projects-grid">
      <article class="project-card ecocharge-card">
        <div class="project-image ecocharge-cover">
          <span>01</span>
          <img
            :src="ecochargeCover"
            alt="EcoCharge – Smart-Charging-Webapplikation"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="project-content">
          <p class="meta">PWA · SMART CHARGING</p>
          <h3>EcoCharge</h3>
          <p>
            EcoCharge vergleicht Strompreise und Solarertrag und schlägt passende Ladezeiten für das Elektroauto vor.
          </p>
          <div class="tags">
            <span>PHP</span><span>MySQL</span><span>Smartcar</span
            ><span>Open-Meteo</span><span>EKZ API</span><span>PWA</span>
          </div>
          <div class="project-actions">
            <button ref="trigger" class="project-link open-project" type="button" aria-haspopup="dialog" @click="openProject">Projekt ansehen →</button>
            <a
              class="project-link"
              href="https://ecocharge.free.nf/login.php"
              target="_blank"
              rel="noopener noreferrer"
              >Live Demo ↗</a
            >
          </div>
        </div>
      </article>

      <article class="project-card">
        <div class="project-image portfolio-art">
          <span>02</span><div class="portfolio-print" aria-hidden="true"><small>PORTFOLIO / EFE AVCI</small><strong>EA.</strong><i>Softwareentwicklung &amp; Systemtechnik</i></div>
        </div>
        <div class="project-content">
          <p class="meta">WEB DEVELOPMENT</p>
          <h3>Portfolio</h3>
          <p>
            Meine persönliche Portfolio-Seite für Projekte, Skills, Ausbildung
            und Berufserfahrung – umgesetzt mit Vue und Vite.
          </p>
          <div class="tags">
            <span>Vue</span><span>Vite</span><span>JavaScript</span
            ><span>CSS</span><span>GitHub</span>
          </div>
          <a
            class="project-link"
            href="https://github.com/efeavci/portfolio-page"
            target="_blank"
            rel="noopener noreferrer"
            >Repository ansehen ↗</a
          >
        </div>
      </article>
    </div>

    <dialog ref="dialog" class="ecocharge-details" id="ecocharge-details" aria-labelledby="ecocharge-title" @close="restoreFocus" @cancel.prevent="closeProject" @click.self="closeProject">
      <div class="dialog-bar"><span>Projektansicht</span><button type="button" autofocus @click="closeProject">Schliessen ×</button></div>
      <div class="case-layout">
        <div class="case-copy">
          <p class="case-label">PROJEKT 01 / SMART CHARGING</p>
          <h3 id="ecocharge-title">EcoCharge</h3>
          <p class="case-lead">Wann lohnt es sich, das Auto zu laden?</p>
          <p class="case-description">EcoCharge vergleicht Strompreise, Solarertrag und den Batteriestand. So lassen sich passende Ladezeiten direkt am Handy vergleichen.</p>
          <a class="case-demo" href="https://ecocharge.free.nf/login.php" target="_blank" rel="noopener noreferrer">Live-Demo öffnen ↗</a>
          <div class="screen-list" role="group" aria-label="App-Ansicht auswählen">
            <button v-for="(screen, i) in screens" :key="screen.title" type="button"
              :aria-pressed="active === i" aria-controls="screen-preview" @click="active = i">
              <span>0{{ i + 1 }}</span>{{ screen.title }}
            </button>
          </div>
        </div>
        <figure id="screen-preview" class="screen-preview" aria-live="polite">
          <div class="screen-stage"><img :src="screens[active].image" :alt="'EcoCharge: ' + screens[active].title"></div>
          <figcaption><strong>{{ screens[active].title }}</strong>{{ screens[active].text }}</figcaption>
        </figure>
      </div>
    </dialog>
  </section>
</template>

<style scoped>
.projects-grid { align-items: stretch; }
.project-card { display: flex; flex-direction: column; min-width: 0; }
.project-image { flex: none; height: auto; aspect-ratio: 16 / 9; }
.ecocharge-cover img { display: block; width: 100%; height: 100%; object-fit: cover; }
.project-image > span { padding: 4px 9px; border-radius: 4px; color: white; background: #15171b; }
.portfolio-art { background: #dce3eb; }
.portfolio-print { color: #202d40; width: 72%; border-block: 1px solid #647184; padding-block: 4%; display: grid; }
.portfolio-print small { font: 10px var(--mono); letter-spacing: .12em; }
.portfolio-print strong { color: inherit; font: 700 clamp(48px, 6vw, 88px)/1.1 system-ui; letter-spacing: -.08em; }
.portfolio-print i { font: 12px/1.4 system-ui; }
.project-content { display: flex; flex: 1; flex-direction: column; align-items: flex-start; }
.project-content .tags { margin-bottom: 18px; }
.project-actions, .project-content > .project-link { margin-top: auto; }
.project-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px 24px; }
.project-link { margin-top: 0; padding-block: 5px; }
.project-link:hover, .back-projects:hover { text-decoration: underline; }
.open-project { background: none; border: 0; cursor: pointer; font-family: inherit; }
.ecocharge-details { position: fixed; inset: 0; margin: auto; padding: 0; width: min(960px, calc(100% - 24px)); max-height: 90dvh; overflow: auto; overscroll-behavior: contain; border: 1px solid #40524b; border-radius: 18px; background: #111a19; color: #eef5ef; }
.ecocharge-details::backdrop { background: rgb(4 8 7 / 78%); backdrop-filter: blur(5px); }
:global(html:has(dialog.ecocharge-details[open])) { overflow: hidden; }
.dialog-bar { position: sticky; top: 0; z-index: 1; display: flex; justify-content: space-between; align-items: center; padding: 8px 16px; background: #111a19; border-bottom: 1px solid #32413d; font-size: 14px; }
.dialog-bar button { color: inherit; background: transparent; border: 0; padding: 10px; cursor: pointer; font: inherit; }
.ecocharge-details .case-layout { border: 0; border-radius: 0; }
.case-layout { display: grid; grid-template-columns: 1fr 1fr; overflow: hidden; background: #111a19; color: #f1f6f3; border: 1px solid #32413d; border-radius: 18px; }
.case-copy { padding: clamp(22px,4vw,56px); align-self: center; min-width: 0; }
.case-label { font: 11px var(--mono); letter-spacing: .12em; color: #a6d9be; }
.case-copy h3 { font-size: clamp(38px,5vw,68px); line-height: 1.12; letter-spacing: -.05em; margin: 12px 0 24px; }
.case-lead { font-size: clamp(19px,2vw,25px); line-height: 1.3; }
.case-description { margin: 12px 0; color: #bfccc5; max-width: 42ch; }
.case-demo { display: inline-block; color: #c0eccf; text-decoration: underline; text-underline-offset: 4px; }
.screen-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px; margin-top: 32px; }
.screen-list button { text-align: left; border: 1px solid #4c6058; border-radius: 6px; background: transparent; color: #e2ece6; padding: 10px; font: inherit; font-size: 14px; cursor: pointer; }
.screen-list button span { display: block; font: 11px var(--mono); margin-bottom: 4px; }
.screen-list button[aria-pressed=true] { background: #c7e8d4; color: #14291e; }
.screen-list button:focus-visible { outline: 2px solid white; outline-offset: 2px; }
.screen-preview { margin: 0; min-width: 0; background: #d8e8df; color: #193025; }
.screen-stage { display: grid; place-items: center; padding: 28px 16px 20px; background: radial-gradient(ellipse at center,#eef5ee,#cadfd3); }
.screen-stage img { display: block; width: 100%; height: clamp(280px,38vw,440px); object-fit: contain; filter: drop-shadow(0 6px 9px #1e38262a); }
.screen-preview figcaption { padding: 16px 24px 22px; font-size: 14px; border-top: 1px solid #b8cec0; min-height: 6em; }
.screen-preview strong { display: block; margin-bottom: 3px; }
@media (max-width: 700px) { .case-layout { grid-template-columns: minmax(0,1fr); } .screen-list { margin-top: 20px; } }

.ecocharge-details[open] {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity 240ms ease-out, transform 320ms cubic-bezier(.2,.75,.25,1);
}
.ecocharge-details[open]::backdrop {
  opacity: 1;
  transition: opacity 240ms ease-out;
}
@starting-style {
  .ecocharge-details[open] { opacity: 0; transform: translateY(12px) scale(.985); }
  .ecocharge-details[open]::backdrop { opacity: 0; }
}
.ecocharge-details[open][data-closing] {
  opacity: 0;
  transform: translateY(8px) scale(.99);
  transition-duration: 180ms, 210ms;
}
.ecocharge-details[open][data-closing]::backdrop {
  opacity: 0;
  transition-duration: 180ms;
}
@media (prefers-reduced-motion: reduce) {
  .ecocharge-details[open], .ecocharge-details[open]::backdrop {
    transition: none !important;
    transform: none !important;
  }
}
</style>
