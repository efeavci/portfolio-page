<script setup>
import ecochargeCover from "../../assets/images/ecocharge/cover.png";
import smartcarConnect from "../../assets/images/ecocharge/smartcar_connect.png";
import vehicleSelection from "../../assets/images/ecocharge/vehicle_selection.png";
import chargingPlan from "../../assets/images/ecocharge/charging_plan1.png";
import settings from "../../assets/images/ecocharge/settings.png";
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
            <a class="project-link" href="#ecocharge-details"
              >Projekt ansehen →</a
            >
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

    <article class="ecocharge-details" id="ecocharge-details" tabindex="-1" aria-label="EcoCharge im Detail">
      <a class="back-projects" href="#work">← Zur Projektübersicht</a>
      <div class="ecocharge-intro">
        <p class="eyebrow">ECOCHARGE · DETAILS</p>
        <h3>Wie EcoCharge einen Ladeplan erstellt</h3>
        <p>
          EcoCharge verbindet Fahrzeugdaten mit Ladepräferenzen, Strompreis,
          Wetter- und Solardaten, um verschiedene Ladezeitfenster übersichtlich
          miteinander zu vergleichen.
        </p>
      </div>

      <div class="ecocharge-features">
        <p>
          Über Smartcar kann EcoCharge ein Fahrzeug verbinden und relevante
          Fahrzeugdaten wie Batteriestand und Fahrzeuginformationen abrufen.
        </p>
        <p>
          Die Anwendung vergleicht Ladezeitfenster anhand von Strompreis,
          Wetter- und Solardaten und stellt passende Ladepläne gegenüber.
        </p>
        <p>
          Ladepriorität, Wallbox-Leistung und Solarpanel-Daten lassen sich in
          den Einstellungen anpassen und fliessen in die Planung ein.
        </p>
      </div>

      <h4 class="gallery-title">Einblicke in die App</h4>
      <div class="ecocharge-gallery">
        <figure>
          <img
            :src="smartcarConnect"
            alt="EcoCharge Smartcar-Verbindung"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Fahrzeug über Smartcar verbinden</figcaption>
        </figure>
        <figure>
          <img
            :src="vehicleSelection"
            alt="EcoCharge Fahrzeugauswahl"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Fahrzeug auswählen</figcaption>
        </figure>
        <figure>
          <img
            :src="chargingPlan"
            alt="EcoCharge Ladeplanung"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Ladezeiten vergleichen</figcaption>
        </figure>
        <figure>
          <img
            :src="settings"
            alt="EcoCharge Einstellungen für Laden und Solaranlage"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Lade- und Solareinstellungen</figcaption>
        </figure>
      </div>
    </article>
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
.ecocharge-details { display: none; scroll-margin-top: 85px; padding-block: clamp(32px, 6vw, 72px); border-bottom: 1px solid var(--border); }
.ecocharge-details:target { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 28px 6%; }
.back-projects, .gallery-title, .ecocharge-gallery { grid-column: 1 / -1; }
.back-projects { color: #70baff; width: fit-content; }
.ecocharge-intro h3 { margin: 10px 0 16px; font-size: clamp(26px, 3vw, 40px); line-height: 1.12; }
.ecocharge-intro > p:last-child, .ecocharge-features p { color: var(--soft); }
.ecocharge-features p + p { padding-top: 12px; margin-top: 12px; border-top: 1px solid var(--border); }
.gallery-title { margin: 0; font-size: 22px; }
.ecocharge-gallery { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; counter-reset: screen; }
.ecocharge-gallery figure { margin: 0; counter-increment: screen; }
.ecocharge-gallery img { width: 100%; aspect-ratio: 9 / 16; object-fit: contain; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; display: block; }
.ecocharge-gallery figcaption { padding-block: 12px; font-size: 14px; }
.ecocharge-gallery figcaption::before { content: counter(screen, decimal-leading-zero) " / "; color: var(--muted); font-family: var(--mono); }
@media (max-width: 900px) { .ecocharge-gallery { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .ecocharge-details:target { grid-template-columns: 1fr; } }
@media (max-width: 480px) { .ecocharge-gallery { grid-template-columns: 1fr; } }
</style>
