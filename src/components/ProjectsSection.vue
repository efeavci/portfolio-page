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
      <h2>Projekte, an denen ich gearbeitet habe.</h2>
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
            Eine Webapplikation für Elektrofahrzeuge, die anhand von
            Ladepräferenzen, Strompreisen, Fahrzeugdaten und einer
            Photovoltaikanlage den optimalen Ladezeitpunkt berechnet.
          </p>
          <div class="tags">
            <span>PHP</span><span>MySQL</span><span>Smartcar</span
            ><span>Open-Meteo</span><span>EKZ API</span><span>PWA</span>
          </div>
          <div class="project-actions">
            <a class="project-link" href="#ecocharge-details"
              >Mehr Informationen →</a
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
          <span>02</span><strong>EA.</strong>
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

    <article class="ecocharge-details" id="ecocharge-details">
      <div class="ecocharge-intro">
        <p class="eyebrow">ECOCHARGE · DETAILS</p>
        <h3>Intelligentes Laden mit Fahrzeug- und Umweltdaten.</h3>
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
.ecocharge-cover {
  position: relative;
  padding: 0;
  overflow: hidden;
  background: #dff4ec;
}

.ecocharge-cover > span {
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
  padding: 7px 10px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  background: rgba(5, 5, 6, 0.68);
  color: #fff;
  backdrop-filter: blur(10px);
}

.ecocharge-cover img {
  width: 100%;
  height: 100%;
  min-height: 330px;
  display: block;
  object-fit: cover;
}

.project-actions {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.ecocharge-details {
  scroll-margin-top: 90px;
  margin-top: 24px;
  padding: 42px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 42px 60px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--surface);
}

.ecocharge-intro h3 {
  margin-top: 12px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.ecocharge-intro > p:last-child {
  margin-top: 18px;
  color: var(--muted);
}

.ecocharge-features {
  display: grid;
  gap: 20px;
}

.ecocharge-features p {
  padding-bottom: 20px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}

.ecocharge-features p:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.ecocharge-gallery {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.ecocharge-gallery figure {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface2);
}

.ecocharge-gallery img {
  width: 100%;
  aspect-ratio: 9 / 16;
  display: block;
  object-fit: cover;
  object-position: top;
}

.ecocharge-gallery figcaption {
  padding: 12px 14px;
  color: var(--soft);
  font-size: 12px;
}

@media (max-width: 900px) {
  .ecocharge-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .ecocharge-cover img {
    min-height: 250px;
  }

  .ecocharge-details {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 28px;
  }

  .ecocharge-gallery {
    grid-column: auto;
  }
}

@media (max-width: 480px) {
  .ecocharge-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
