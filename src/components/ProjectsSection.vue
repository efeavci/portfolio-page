<template>
  <section class="section projects" id="work">
    <header class="section-heading">
      <p class="eyebrow">PROJEKTE</p>
      <h2>Projekte, an denen ich gearbeitet habe.</h2>
    </header>
    <div class="projects-grid">
      <article class="project-card">
        <div class="project-image analytics-art">
          <span>01</span>
          <div class="dashboard">
            <div class="dash-bar"></div>
            <div class="chart"><i></i><i></i><i></i><i></i><i></i></div>
            <div class="dash-info">
              <small>EcoCharge</small><strong>EV</strong>
            </div>
          </div>
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
          <a
            class="project-link"
            href="https://ecocharge.free.nf/login.php?i=1"
            target="_blank"
            rel="noopener noreferrer"
            >Live Demo ↗</a
          >
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
  </section>
</template>
