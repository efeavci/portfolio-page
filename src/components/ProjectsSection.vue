<script setup>
import ecochargeCover from "../../assets/images/ecocharge/cover.png";
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
            Eine Webapplikation für Elektrofahrzeuge, die Ladepräferenzen,
            Strompreise, Fahrzeugdaten sowie Wetter- und Solardaten kombiniert,
            um passende Ladezeitpunkte zu berechnen.
          </p>
          <div class="tags">
            <span>PHP</span><span>MySQL</span><span>Smartcar</span
            ><span>Open-Meteo</span><span>EKZ API</span><span>PWA</span>
          </div>
          <div class="project-actions">
            <a class="project-link project-link-muted" href="#ecocharge-project"
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

    <div id="ecocharge-project" class="project-coming-soon" aria-hidden="true"></div>
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
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.project-link-muted {
  color: var(--soft);
}

.project-coming-soon {
  display: none;
}

@media (max-width: 700px) {
  .ecocharge-cover img {
    min-height: 250px;
  }
}
</style>
