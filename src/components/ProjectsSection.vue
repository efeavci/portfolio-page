<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import ecochargeCover from "../../assets/images/ecocharge/cover.png";
import smartcarConnect from "../../assets/images/ecocharge/smartcar_connect.png";
import vehicleSelection from "../../assets/images/ecocharge/vehicle_selection.png";
import chargingPlan from "../../assets/images/ecocharge/charging_plan1.png";
import settings from "../../assets/images/ecocharge/settings.png";
import chargingPlan2 from "../../assets/images/ecocharge/charging_plan2.png";
import permission1 from "../../assets/images/ecocharge/allow_notallow1.png";
import permission2 from "../../assets/images/ecocharge/allow_notallow2.png";

const screens = [
  { title: "Titelblatt", heading: "Smart EV Charging", images: [ecochargeCover], text: "EcoCharge ist eine webbasierte Anwendung, die Nutzer von Elektrofahrzeugen dabei unterstützt, den idealen Ladezeitpunkt zu bestimmen. Dabei werden sowohl die persönlichen Anforderungen an den Ladevorgang als auch die verfügbaren Lademöglichkeiten und die Nutzung von Solarenergie berücksichtigt." },
  { title: "Ladeplan", images: [chargingPlan, chargingPlan2], text: "Der Ladeplan bietet dem Nutzer eine Übersicht darüber, wann das Elektrofahrzeug idealerweise geladen werden sollte. Zusätzlich werden weitere mögliche Ladezeiten angezeigt. Die vorgeschlagenen Zeitpunkte werden anhand der individuellen Ladeeinstellungen und der verfügbaren Energieinformationen ermittelt." },
  { title: "API Anbindung", images: [permission1, permission2, smartcarConnect], text: "Über Smartcar verbindet EcoCharge das Fahrzeug mit der App." },
  { title: "Fahrzeug", images: [vehicleSelection], text: "Das ausgewählte Fahrzeug liefert den Batteriestand für die Ladeplanung." },
  { title: "Einstellungen", images: [settings], text: "Im Einstellungsbereich lassen sich verschiedene Angaben individuell anpassen. Dazu gehören beispielsweise die gewünschten Ladebedingungen, die technischen Eigenschaften der Ladestation, Informationen zur Solaranlage sowie die Daten des Elektrofahrzeugs." }
];
const technologies = ["PHP", "MySQL", "Smartcar", "Open-Meteo", "EKZ API", "PWA"];
const slide = ref(0);
let timer;
let manual = false;
function stopTimer() { clearInterval(timer); }
function selectScreen(index) {
  stopTimer();
  active.value = index;
  slide.value = 0;
  const count = screens[index].images.length;
  if (count > 1 && !manual && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    timer = setInterval(() => { slide.value = (slide.value + 1) % count; }, 3000);
  }
}
function step(direction) {
  manual = true;
  stopTimer();
  const count = screens[active.value].images.length;
  slide.value = (slide.value + direction + count) % count;
}
onBeforeUnmount(stopTimer);
const active = ref(0);
const dialog = ref(null);
const trigger = ref(null);
const portfolioLink = ref(null);

function openProject() {
  const panel = dialog.value;
  if (panel.open) return;
  manual = false;
  selectScreen(0);
  delete panel.dataset.closing;
  panel.showModal();
  panel.scrollTop = 0;
}

async function closeProject() {
  const panel = dialog.value;
  if (!panel.open || panel.dataset.closing) return;
  stopTimer();
  panel.dataset.closing = "true";

  // Keep the background inert until both the panel and backdrop have faded.
  getComputedStyle(panel).opacity;
  const transitions = panel.getAnimations({ subtree: true })
    .filter(animation => "transitionProperty" in animation);
  await Promise.allSettled(transitions.map(animation => animation.finished));
  if (panel.open) panel.close();
}

function restoreFocus() {
  stopTimer();
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
      <article class="project-card ecocharge-card" @click="!$event.target.closest('a, button') && openProject()">
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

      <article class="project-card" @click="!$event.target.closest('a, button') && portfolioLink.click()">
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
            ref="portfolioLink" href="https://github.com/efeavci/portfolio-page"
            target="_blank"
            rel="noopener noreferrer"
            >Repository ansehen ↗</a
          >
        </div>
      </article>
    </div>

    <dialog ref="dialog" class="ecocharge-details" id="ecocharge-details" aria-labelledby="ecocharge-title" @close="restoreFocus" @cancel.prevent="closeProject" @click.self="closeProject">
      <header class="dialog-bar"><span>Projekte <b>/</b> EcoCharge</span><button aria-label="Projektansicht schliessen" type="button" autofocus @click="closeProject">×</button></header>
      <div class="screen-list" role="group" aria-label="App-Ansicht auswählen">
            <button v-for="(screen, i) in screens" :key="screen.title" type="button"
              :aria-pressed="active === i" aria-controls="screen-preview" @click="selectScreen(i)">
              {{ screen.title }}
            </button>
          </div>
      <div class="case-layout" :class="{ cover: active === 0 }">
        <div class="case-copy">
          <p class="case-label">SMART CHARGING · PWA</p>
          <h3 id="ecocharge-title">EcoCharge</h3>
          <div :key="active" class="pane-enter">
            <h4 class="case-lead">{{ screens[active].heading || screens[active].title }}</h4>
            <p class="case-description">{{ screens[active].text }}</p>
            <p v-if="active === 0" class="stack">{{ technologies.join(' · ') }}</p>
          </div>
          <div class="resource-links"><a href="https://ecocharge.free.nf/login.php" target="_blank" rel="noopener noreferrer">Live-Demo ↗</a><a href="https://showroom-bcs.digisus-lab.ch/ecocharge-smartes-laden-fur-dein-elektroauto/" target="_blank" rel="noopener noreferrer">Dokumentation ↗</a></div>
        </div>
        <figure id="screen-preview" class="screen-preview">
          <div class="screen-stage">
            <Transition name="picture">
              <img :key="screens[active].images[slide]" :src="screens[active].images[slide]" :alt="'EcoCharge – ' + screens[active].title + ', Bild ' + (slide + 1)">
            </Transition>
            <template v-if="screens[active].images.length > 1">
              <button class="arrow prev" type="button" aria-label="Vorheriges Bild" @click="step(-1)">‹</button>
              <button class="arrow next" type="button" aria-label="Nächstes Bild" @click="step(1)">›</button>
            </template>
          </div>
          <figcaption v-if="screens[active].images.length > 1">{{ screens[active].title }} · Bild {{ slide + 1 }} von {{ screens[active].images.length }}</figcaption>
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
.dialog-bar { display:flex; align-items:center; justify-content:space-between; padding:10px 20px; color:#cdd6d0; font-size:13px; border-bottom:1px solid #34403b; }
.dialog-bar b { margin:0 6px; color:#789085; }
.dialog-bar button { width:38px; height:38px; border:1px solid #435149; border-radius:50%; background:none; color:#f1f5ef; font:24px/1 system-ui; cursor:pointer; }
.ecocharge-details :focus-visible { outline:2px solid #aad5b9; outline-offset:2px; }
.screen-list { display:flex; flex-wrap:wrap; gap:4px 16px; padding:8px 20px 0; border-bottom:1px solid #34403b; }
.screen-list button { font:inherit; font-size:14px; padding:8px 0; color:#b8c4bd; background:none; border:0; border-bottom:2px solid transparent; cursor:pointer; }
.screen-list button[aria-pressed=true] { color:#d4f5dc; border-color:#a6d9b7; }
.case-layout { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.05fr); align-items:center; gap:clamp(20px,4vw,40px); padding:clamp(18px,3vw,36px); }
.case-label,.stack { font:12px/1.6 var(--mono); color:#accdb7; }
.case-copy h3 { font-size:clamp(34px,4vw,56px); line-height:1.08; letter-spacing:-.05em; margin:8px 0 18px; }
.case-lead { font-size:21px; font-weight:550; }
.case-description { margin:10px 0 16px; font-size:15px; line-height:1.65; color:#c5cfc9; }
.resource-links a { color:#d3ebda; text-decoration:underline; text-underline-offset:4px; font-size:14px; }
.screen-preview { margin:0; min-width:0; }
.screen-stage { display:grid; place-items:center; border-radius:12px; background:#22332c; }
.screen-stage img { width:100%; height:clamp(235px,46vh,400px); display:block; object-fit:contain; }
.cover .screen-stage img { height:auto; }
.screen-preview figcaption { color:#aab8b0; font:12px/1.5 var(--mono); margin-top:8px; text-align:center; }
@media(max-width:680px) {
 .case-layout { grid-template-columns:minmax(0,1fr); }
 .screen-list { gap:2px 12px; padding-inline:14px; }
 .screen-list button { font-size:13px; }
 .screen-stage img { height:310px; }
}
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

.project-card { cursor: pointer; }
.resource-links { display: flex; flex-wrap: wrap; gap: 16px; margin-block: 18px; }
.screen-stage { position: relative; overflow: hidden; }
.screen-stage img { grid-area: 1 / 1; }
.arrow { position: absolute; top: 50%; margin-top: -22px; width: 44px; height: 44px; border-radius: 50%; border: 1px solid #607669; background: #172b22; color: white; font: 26px/1 system-ui; cursor: pointer; }
.prev { left: 6px; } .next { right: 6px; }
.picture-enter-active, .picture-leave-active { transition: opacity .36s ease, transform .36s ease; }
.picture-enter-from { opacity: 0; transform: translateX(7px); }
.picture-leave-to { opacity: 0; transform: translateX(-7px); }
.pane-enter { animation: pane-in .3s ease-out; }
@keyframes pane-in { from { opacity: 0; transform: translateY(5px); } }
@media (prefers-reduced-motion: reduce) {
  .picture-enter-active, .picture-leave-active { transition: none; }
  .pane-enter { animation: none; }
}
</style>
