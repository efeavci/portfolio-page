<template>
  <section class="section projects" id="work">
    <header class="section-heading">
      <p class="eyebrow">PROJEKTE</p>
      <h2>Projekte, an denen ich gearbeitet habe.</h2>
    </header>
    <div class="projects-grid">
      <article class="project-card ecocharge-card">
        <div class="project-image ecocharge-art">
          <span>01</span>
          <div class="ecocharge-preview" aria-hidden="true">
            <div class="ecocharge-brand"><strong>Eco</strong>Charge</div>
            <div class="ecocharge-phone">
              <small>Dein Ladeplan</small>
              <strong>TESLA X</strong>
              <div class="charge-plan">
                <span>Empfohlen</span>
                <b>Morgen, 12:00 – 14:00</b>
                <small>Strompreis · Wetter · Solar</small>
              </div>
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
      <div>
        <p class="eyebrow">ECOCHARGE · DETAILS</p>
        <h3>Intelligentes Laden mit echten Fahrzeug- und Umweltdaten.</h3>
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
    </article>
  </section>
</template>

<style scoped>
.ecocharge-art {
  background:
    radial-gradient(circle at 70% 35%, rgba(41, 151, 255, 0.18), transparent 28%),
    linear-gradient(145deg, #e8f8f0, #c8eee0);
}

.ecocharge-preview {
  width: min(82%, 430px);
  height: 235px;
  position: relative;
  border-radius: 18px;
  background: linear-gradient(145deg, #f8fbfa, #e6f4ef);
  box-shadow: 0 24px 55px rgba(0, 60, 45, 0.2);
  overflow: hidden;
}

.ecocharge-brand {
  position: absolute;
  top: 28px;
  left: 28px;
  color: #0b347f;
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.ecocharge-brand strong {
  color: #2b8b2b;
}

.ecocharge-phone {
  position: absolute;
  width: 150px;
  height: 205px;
  right: 28px;
  top: 15px;
  padding: 18px 14px;
  border: 5px solid #111;
  border-radius: 24px;
  background: #f6f7f9;
  color: #161719;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.22);
}

.ecocharge-phone > small,
.ecocharge-phone > strong {
  display: block;
}

.ecocharge-phone > small {
  font-size: 8px;
  color: #686b70;
}

.ecocharge-phone > strong {
  margin-top: 4px;
  font-size: 13px;
}

.charge-plan {
  margin-top: 16px;
  padding: 12px;
  border-radius: 14px;
  background: linear-gradient(145deg, #0aa87c, #087f68);
  color: #fff;
}

.charge-plan span,
.charge-plan b,
.charge-plan small {
  display: block;
}

.charge-plan span,
.charge-plan small {
  font-size: 7px;
  opacity: 0.8;
}

.charge-plan b {
  margin: 5px 0;
  font-size: 10px;
  line-height: 1.25;
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
  gap: 60px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--surface);
}

.ecocharge-details h3 {
  margin-top: 12px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.04em;
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

@media (max-width: 700px) {
  .ecocharge-preview {
    height: 210px;
  }

  .ecocharge-brand {
    top: 24px;
    left: 20px;
    font-size: 22px;
  }

  .ecocharge-phone {
    width: 135px;
    height: 185px;
    right: 18px;
  }

  .ecocharge-details {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 28px;
  }
}
</style>
