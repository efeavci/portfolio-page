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
import monitorShot0 from "../../assets/images/monitoring_ksda/overview1.png";
import monitorShot1 from "../../assets/images/monitoring_ksda/article_production.png";
import monitorShot2 from "../../assets/images/monitoring_ksda/article_production2.png";
import monitorShot3 from "../../assets/images/monitoring_ksda/channels_by_language.png";
import monitorShot4 from "../../assets/images/monitoring_ksda/publisher.png";
import monitorShot5 from "../../assets/images/monitoring_ksda/usage_timeline.png";
import monitorShot6 from "../../assets/images/monitoring_ksda/image_usage.png";
import monitorShot7 from "../../assets/images/monitoring_ksda/top50_00.png";
import monitorShot8 from "../../assets/images/monitoring_ksda/alerts.png";
import monitorShot9 from "../../assets/images/monitoring_ksda/login_page_monitoringksda.png";
import monitorCover from "../../assets/images/monitoring_ksda/title_picture.jpg";
const monitorTools = ["Django / Python", "HTML", "CSS", "JavaScript", "MySQL", "PostgreSQL", "Claude"];
const monitoringImages = [
  { image: monitorCover, title: "Einleitung" },
  { image: monitorShot9, title: "Login und Authentifizierung" },
  { image: monitorShot0, title: "Article Overview – Artikelübersicht" },
  { image: monitorShot1, title: "Article Production – Artikelproduktion" },
  { image: monitorShot2, title: "Artikelklassifizierung und Inhaltsanalyse" },
  { image: monitorShot3, title: "Channels by Language – Themenverteilung nach Sprache" },
  { image: monitorShot6, title: "Image Usage – Bildnutzungsanalyse" },
  { image: monitorShot4, title: "Publishers – Publisher-Verwaltung und Übersicht" },
  { image: monitorShot7, title: "Top 50 Articles und Unused Articles" },
  { image: monitorShot5, title: "Usage Timeline – Nutzungsverlauf und Publisher-Vergleich" },
  { image: monitorShot8, title: "Alerts – Warnmeldungen und Monitoring" }
];
const monitorDialog = ref(null);
const monitorIndex = ref(0);
function openMonitoring() {
  monitorIndex.value = 0;
  monitorDialog.value.showModal();
  monitorDialog.value.querySelector(".doc-scroll").scrollTop = 0;
}
const technologies = ["PHP", "MySQL", "Smartcar", "Open-Meteo", "EKZ API", "PWA"];
const shortTitles = ['Einleitung','Login','Übersicht','Produktion','Inhaltsanalyse','Sprachen','Bildnutzung','Publisher','Top 50','Nutzungsverlauf','Alerts'];
function jump(event,i) {
  const box = event.currentTarget.closest('dialog').querySelector('.doc-scroll');
  const target = box.querySelectorAll('[data-chapter]')[i];
  box.scrollTo({ top: box.scrollTop + target.getBoundingClientRect().top - box.getBoundingClientRect().top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
function sync(event, eco) {
  const box = event.currentTarget;
  const chapters = [...box.querySelectorAll('[data-chapter]')];
  const top = box.getBoundingClientRect().top + 12;
  let i = chapters.reduce((n,el,j) => el.getBoundingClientRect().top <= top ? j : n, 0);
  if (box.scrollTop > 0 && box.scrollHeight - box.clientHeight - box.scrollTop < 2) i = chapters.length - 1;
  if (i === (eco ? active.value : monitorIndex.value)) return;
  if (eco) selectScreen(i); else monitorIndex.value = i;
  const nav = box.closest('dialog').querySelector('.chapter-nav');
  const button = nav.children[i];
  const rect = button.getBoundingClientRect(), bounds = nav.getBoundingClientRect();
  if (rect.left < bounds.left || rect.right > bounds.right) nav.scrollLeft += rect.left - bounds.left - 8;
}
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

function openProject() {
  const panel = dialog.value;
  if (panel.open) return;
  manual = false;
  selectScreen(0);
  delete panel.dataset.closing;
  panel.showModal();
  panel.querySelector(".doc-scroll").scrollTop = 0;
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

      <article class="project-card monitoring-card" @click="!$event.target.closest('button') && openMonitoring()">
        <div class="project-image monitor-cover">
          <img :src="monitorCover" alt="Titelbild des Keystone SDA Monitoring Dashboards" draggable="false" @contextmenu.prevent>
        </div>
        <div class="project-content"><p class="meta">DATENANALYSE · DASHBOARD</p><h3>Monitoring</h3><p>Artikelproduktion, Publisher und Bildnutzung im Überblick.</p>
          <div class="tags"><span v-for="tool in monitorTools" :key="tool">{{ tool }}</span></div>
          <div class="project-actions"><button class="project-link open-project" type="button" aria-haspopup="dialog" @click="openMonitoring">Projekt ansehen →</button></div>
        </div>
      </article>
    </div>

    <dialog ref="monitorDialog" class="ecocharge-details monitor-dialog" aria-labelledby="monitor-title" @click.self="monitorDialog.close()">
      <header class="dialog-bar"><span>Projekte / Monitoring</span><button type="button" aria-label="Projektansicht schliessen" @click="monitorDialog.close()">×</button></header>
      <nav class="chapter-nav" aria-label="Monitoring-Kapitel"><button type="button" v-for="(item,i) in monitoringImages" :key="item.title" :aria-current="(monitorIndex === i) ? 'location' : undefined" @click="jump($event,i)">{{ shortTitles[i] }}</button></nav>
<div class="doc-scroll monitor-body" @scroll.passive="sync($event,false)">
        <p class="case-label">DATENANALYSE / MONITORING</p>
        <h3 id="monitor-title">Keystone SDA Monitoring Dashboard</h3>
        <div class="project-tools" ><strong>Technologien &amp; Tools</strong><ul><li v-for="tool in monitorTools" :key="tool">{{ tool }}</li></ul></div>
        
        
<section data-chapter class="doc-copy"><h4>Einleitung</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[0].image" :alt="monitoringImages[0].title">
<p>Das Keystone SDA Monitoring Dashboard ist eine webbasierte Analyseplattform zur Überwachung und Auswertung von Nachrichtenartikeln, deren Nutzung durch Publisher sowie der Verwendung von Bildmaterial.</p>
<p>Die Anwendung stellt verschiedene Kennzahlen, Diagramme und Tabellen zur Verfügung, um die Artikelproduktion, Nutzungsmuster und Aktivitäten einzelner Publisher transparent darzustellen.</p>
<p>Das Dashboard ermöglicht es, Daten über unterschiedliche Zeiträume auszuwerten, gezielt nach Kriterien zu filtern und Veränderungen in der Nutzung zu erkennen.</p>
<p>Die Benutzeroberfläche ist in mehrere Bereiche unterteilt: Article Overview, Article Usage, Unused Articles, Image Usage, Publishers und Alerts.</p></section>
<section data-chapter class="doc-copy"><h4>Login und Authentifizierung</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[1].image" :alt="monitoringImages[1].title">
<p>Die Login-Seite bildet den Einstiegspunkt in die Keystone SDA Monitoring-Plattform.</p>
<p>Benutzer können sich über zwei verschiedene Anmeldemethoden authentifizieren.</p>
<p>Google-Anmeldung: Über die Google-Anmeldefunktion können sich Benutzer mit ihrem Google-Konto anmelden.</p>
<p>Benutzername und Passwort: Alternativ steht eine klassische Anmeldung zur Verfügung, bei der die Benutzer ihre Zugangsdaten manuell eingeben.</p>
<p>Nach erfolgreicher Authentifizierung erhalten Benutzer Zugriff auf die Monitoring- und Analysefunktionen entsprechend ihren Berechtigungen.</p></section>
<section data-chapter class="doc-copy"><h4>Article Overview – Artikelübersicht</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[2].image" :alt="monitoringImages[2].title">
<p>Die Seite Article Overview bietet eine zentrale Übersicht über die Artikelproduktion und die Nutzung der bereitgestellten Nachrichteninhalte.</p>
<p>Im oberen Bereich befindet sich eine Filtersektion, über die Benutzer den gewünschten Auswertungszeitraum sowie weitere Kriterien definieren können.</p>
<h5>Filtermöglichkeiten</h5>
<ul><li>Period: Auswahl zwischen Jahr, Monat, Woche und Tag.</li><li>Start Date / End Date: Manuelle Festlegung des Auswertungszeitraums.</li><li>Language: Filterung nach Sprache.</li><li>Published: Einschränkung nach Veröffentlichungsstatus.</li><li>Inland / Ausland: Unterscheidung zwischen nationalen und internationalen Nachrichten.</li><li>RTP: Filterung nach Ready-to-Publish-Kriterien.</li><li>Service: Auswahl einzelner Nachrichtendienste.</li><li>Channel: Filterung nach Themenkanälen.</li><li>Story Type: Auswahl verschiedener Artikeltypen.</li><li>Genre: Einschränkung nach journalistischen Inhaltskategorien.</li></ul>
<h5>Kennzahlen</h5>
<p>Unterhalb der Filter werden verschiedene Statistikfelder angezeigt.</p>
<p>Total Articles: Zeigt die Gesamtanzahl aller Artikel im gewählten Zeitraum.</p>
<p>Published: Gibt an, wie viele Artikel von Publishern verwendet beziehungsweise veröffentlicht wurden.</p>
<p>Not Published: Zeigt die Anzahl der Artikel ohne registrierte Nutzung.</p>
<p>No RTP: Zeigt die Anzahl der Artikel ohne Ready-to-Publish-Kennzeichnung.</p>
<p>Zusätzlich werden prozentuale Veränderungen gegenüber einem Vergleichszeitraum dargestellt.</p>
<p>Diese Kennzahlen ermöglichen eine schnelle Einschätzung der Artikelproduktion und der Nutzung durch Publisher.</p></section>
<section data-chapter class="doc-copy"><h4>Article Production – Artikelproduktion</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[3].image" :alt="monitoringImages[3].title">
<p>Der Bereich Article Production visualisiert die tägliche Artikelproduktion anhand eines gestapelten Balkendiagramms.</p>
<p>Die horizontale Achse zeigt die einzelnen Tage des ausgewählten Zeitraums. Die vertikale Achse stellt die Anzahl produzierter Artikel dar.</p>
<p>Jeder Balken repräsentiert die gesamte Artikelproduktion eines Tages und ist in verschiedene Themenbereiche unterteilt.</p>
<p>Dazu gehören beispielsweise Politik, Sport, Wirtschaft und Finanzen, Katastrophen und Unfälle, Justiz und Kriminalität sowie weitere Nachrichtenkategorien.</p>
<p>Jeder Themenbereich wird durch eine eigene Farbe dargestellt.</p>
<p>Dadurch lässt sich erkennen, wie sich die tägliche Artikelproduktion auf die verschiedenen Themen verteilt.</p>
<p>Das Diagramm unterstützt insbesondere die Analyse von Produktionsschwankungen, thematischen Schwerpunkten und aussergewöhnlich hohen oder niedrigen Artikelmengen.</p></section>
<section data-chapter class="doc-copy"><h4>Artikelklassifizierung und Inhaltsanalyse</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[4].image" :alt="monitoringImages[4].title">
<p>Dieser Bereich erweitert die Artikelproduktionsanalyse durch verschiedene Kreis- beziehungsweise Donut-Diagramme.</p>
<p>Die Diagramme zeigen die Verteilung der Artikel nach unterschiedlichen Metadaten und Klassifizierungsmerkmalen.</p>
<h5>Sentiment</h5>
<p>Das Sentiment-Diagramm zeigt die emotionale Einordnung der Nachrichtenartikel.</p>
<p>Die Inhalte werden beispielsweise in Neutral, Negative, Positive und Critical unterteilt.</p>
<p>Dadurch lässt sich erkennen, welche Stimmungen innerhalb der produzierten Nachrichten dominieren.</p>
<h5>Language</h5>
<p>Das Sprachdiagramm stellt die Verteilung der Artikel auf die verschiedenen Sprachen dar.</p>
<p>Im gezeigten Beispiel werden Deutsch, Französisch und Italienisch berücksichtigt.</p>
<p>Diese Darstellung ermöglicht eine Analyse der sprachlichen Verteilung der Nachrichtenproduktion.</p>
<h5>Story Type</h5>
<p>Das Diagramm Story Type zeigt die Verteilung unterschiedlicher Nachrichtenformate.</p>
<p>Dazu gehören beispielsweise Einzelmeldungen, Auftakte, Zusammenfassungen, Bulletins und Tagesprogramme.</p>
<h5>Genre</h5>
<p>Das Genre-Diagramm zeigt die journalistische Einordnung der Inhalte.</p>
<p>Beispiele sind Nachrichten, Programme, Resultate, Interviews, Reportagen und Hintergrundberichte.</p>
<h5>Channel</h5>
<p>Das Channel-Diagramm visualisiert die Verteilung der Nachrichten nach Themenbereichen wie Politik, Sport, Wirtschaft oder Unterhaltung.</p>
<h5>User Needs</h5>
<p>Das Diagramm User Needs stellt dar, welche Informationsbedürfnisse durch die Nachrichteninhalte angesprochen werden.</p>
<p>Beispielsweise werden Inhalte den Kategorien Inform Me, Give Me Background, Touch Me und Guide Me zugeordnet.</p>
<h5>Inland / Ausland</h5>
<p>Dieses Diagramm zeigt das Verhältnis zwischen nationalen und internationalen Nachrichten.</p>
<p>Die verschiedenen Auswertungen ermöglichen eine detaillierte Analyse der inhaltlichen Zusammensetzung der Artikelproduktion.</p></section>
<section data-chapter class="doc-copy"><h4>Channels by Language – Themenverteilung nach Sprache</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[5].image" :alt="monitoringImages[5].title">
<p>Das Diagramm Channels by Language zeigt die Verteilung der Nachrichtenartikel auf verschiedene Themenbereiche, aufgeschlüsselt nach Sprache.</p>
<p>Auf der horizontalen Achse befinden sich die einzelnen Themenkategorien, beispielsweise Politik, Sport, Wirtschaft und Finanzen sowie Katastrophen und Unfälle.</p>
<p>Die vertikale Achse zeigt die Anzahl der Artikel.</p>
<p>Für jede Kategorie werden die Sprachen Deutsch, Französisch und Italienisch farblich unterschieden dargestellt.</p>
<p>Durch die gestapelten Balken können Benutzer sowohl die Gesamtmenge der Artikel innerhalb eines Themenbereichs als auch deren sprachliche Verteilung vergleichen.</p>
<p>Diese Funktion hilft dabei, Unterschiede zwischen den Sprachregionen zu erkennen und thematische Schwerpunkte innerhalb der Nachrichtenproduktion zu analysieren.</p></section>
<section data-chapter class="doc-copy"><h4>Image Usage – Bildnutzungsanalyse</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[6].image" :alt="monitoringImages[6].title">
<p>Der Bereich Image Usage dient der Analyse der Nutzung von Bildmaterial durch Publisher.</p>
<p>Die Seite ermöglicht es, die Verwendung einzelner Bilder über einen bestimmten Zeitraum zu untersuchen.</p>
<h5>Filtermöglichkeiten</h5>
<p>Benutzer können den Auswertungszeitraum über die Optionen Jahr, Monat, Woche oder Tag festlegen.</p>
<p>Alternativ können ein Start- und Enddatum manuell ausgewählt werden.</p>
<p>Weitere Filter ermöglichen die Einschränkung nach Publishern beziehungsweise Publisher-Gruppen, Match Scores, Themenbereichen, Kundenstatus und Schweizer Publishern.</p>
<h5>Top 50 Used Images</h5>
<p>Die Tabelle Top 50 Used Images zeigt die am häufigsten verwendeten Bilder.</p>
<p>Zu jedem Eintrag werden folgende Informationen dargestellt:</p>
<ul><li>Image: Vorschau des jeweiligen Bildes.</li><li>ID: Eindeutige Bildkennung.</li><li>Topic: Zugeordneter Themenbereich.</li><li>Publisher: Publisher, bei dem die Nutzung registriert wurde.</li><li>Usages: Anzahl der erfassten Bildverwendungen.</li></ul>
<h5>Daily Average Benchmark</h5>
<p>Dieser Bereich ermöglicht den Vergleich der durchschnittlichen täglichen Bildnutzung mit einem Referenzwert.</p>
<h5>By Topic</h5>
<p>Die Auswertung By Topic zeigt, wie sich die Bildnutzung auf verschiedene Themenbereiche verteilt.</p>
<p>Die Bildnutzungsanalyse unterstützt dabei, häufig verwendetes Bildmaterial zu identifizieren und Nutzungsmuster der Publisher auszuwerten.</p></section>
<section data-chapter class="doc-copy"><h4>Publishers – Publisher-Verwaltung und Übersicht</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[7].image" :alt="monitoringImages[7].title">
<p>Der Bereich Publishers stellt eine zentrale Übersicht über die erfassten Publisher und Publisher-Gruppen zur Verfügung.</p>
<p>Die Tabelle zeigt wichtige Informationen über die Aktivitäten und die Nutzung der Nachrichteninhalte.</p>
<h5>Such- und Filterfunktionen</h5>
<p>Über die Suchfunktion können Publisher anhand ihres Namens oder ihrer Domain gefunden werden.</p>
<p>Zusätzlich stehen Filter für den Kundenstatus, RTP und Schweizer Publisher zur Verfügung.</p>
<h5>Publisher-Tabelle</h5>
<p>Die Tabelle enthält folgende Informationen:</p>
<table><thead><tr><th>Spalte</th><th>Beschreibung</th></tr></thead><tbody><tr><td>Publisher</td><td>Name des Publishers</td></tr><tr><td>Domain</td><td>Zugehörige Internetdomain</td></tr><tr><td>Customer</td><td>Kennzeichnung des Kundenstatus</td></tr><tr><td>Online</td><td>Anzahl der Online-Nutzungen</td></tr><tr><td>Print</td><td>Anzahl der Print-Nutzungen</td></tr><tr><td>Images</td><td>Anzahl der Bildnutzungen</td></tr><tr><td>Unique Stories</td><td>Anzahl unterschiedlicher Nachrichtenartikel</td></tr><tr><td>Last Seen</td><td>Datum der zuletzt erfassten Aktivität</td></tr><tr><td>Total</td><td>Gesamtzahl der ausgewiesenen Nutzungen</td></tr></tbody></table>
<p>Die Publisher können anhand der dargestellten Kennzahlen miteinander verglichen werden.</p>
<p>Neben einzelnen Publishern können auch Publisher-Gruppen betrachtet werden.</p>
<p>Dadurch eignet sich dieser Bereich zur Analyse der Kundenaktivität und zur Identifikation besonders aktiver Publisher.</p></section>
<section data-chapter class="doc-copy"><h4>Top 50 Articles und Unused Articles</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[8].image" :alt="monitoringImages[8].title">
<p>Dieser Bereich stellt zwei wichtige Auswertungen gegenüber: die am häufigsten genutzten Artikel und die Artikel ohne registrierte Nutzung.</p>
<h5>Top 50 Articles</h5>
<p>Die Tabelle Top 50 Articles zeigt die 50 Artikel mit den höchsten Nutzungszahlen.</p>
<p>Zu jedem Artikel werden der Titel, die Anzahl der Verwendungen sowie zusätzliche Metadaten angezeigt.</p>
<p>Zu diesen Metadaten gehören beispielsweise der zugehörige Nachrichtendienst, die Sprache und der Themenbereich.</p>
<p>Die Artikel werden nach der Anzahl ihrer Nutzungen sortiert.</p>
<p>Dadurch lassen sich besonders erfolgreiche beziehungsweise häufig verwendete Nachrichten identifizieren.</p>
<h5>Articles not used</h5>
<p>Die Tabelle Articles not used zeigt Artikel, für die keine Nutzung registriert wurde.</p>
<p>Zu jedem Artikel werden der Titel, der Nachrichtendienst, die Sprache, der Themenbereich und das Datum dargestellt.</p>
<p>Diese Funktion unterstützt die Analyse von nicht verwendeten Nachrichteninhalten.</p>
<p>Durch die Gegenüberstellung beider Tabellen können Unterschiede zwischen häufig genutzten und nicht genutzten Artikeln untersucht werden.</p></section>
<section data-chapter class="doc-copy"><h4>Usage Timeline – Nutzungsverlauf und Publisher-Vergleich</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[9].image" :alt="monitoringImages[9].title">
<p>Der Bereich Usage Timeline visualisiert die Nutzung von Nachrichtenartikeln durch ausgewählte Publisher über einen bestimmten Zeitraum.</p>
<h5>Usage Timeline</h5>
<p>Das Balkendiagramm stellt die tägliche Artikelverwendung dar.</p>
<p>Die horizontale Achse zeigt die einzelnen Tage, während die vertikale Achse die Anzahl der Nutzungen darstellt.</p>
<p>Jeder Publisher wird durch eine eigene Farbe gekennzeichnet.</p>
<p>Die Darstellung ermöglicht einen direkten Vergleich der Nutzungsaktivität verschiedener Publisher.</p>
<p>Zusätzlich können unterschiedliche Nutzungsstufen wie Max, High und Medium berücksichtigt werden.</p>
<p>Die Legende unterscheidet zwischen aktuellen und vorherigen Vergleichswerten, wobei verblasste Balken den vorherigen und kräftige Balken den aktuellen Zeitraum repräsentieren.</p>
<h5>Daily Average Benchmark</h5>
<p>Dieser Bereich zeigt die durchschnittliche tägliche Nutzung ausgewählter Publisher im Vergleich zu einem globalen Durchschnitt.</p>
<p>Dadurch kann die Aktivität einzelner Publisher besser eingeordnet werden.</p>
<h5>By Service</h5>
<p>Die Auswertung By Service zeigt, wie sich die Artikelverwendungen auf unterschiedliche Nachrichtendienste verteilen.</p>
<p>Dabei können die Nutzungszahlen sowohl gesamthaft als auch für einzelne Publisher beziehungsweise Publisher-Gruppen betrachtet werden.</p>
<h5>Selected Publishers</h5>
<p>Die Tabelle Selected Publishers zeigt die für den Vergleich ausgewählten Publisher und Gruppen.</p>
<p>Für jeden Publisher werden die gesamte Nutzung sowie die Aufteilung zwischen Online- und Print-Nutzungen angezeigt.</p>
<p>Die Kombination dieser Funktionen ermöglicht eine detaillierte Analyse der Publisher-Aktivität und des zeitlichen Nutzungsverhaltens.</p></section>
<section data-chapter class="doc-copy"><h4>Alerts – Warnmeldungen und Monitoring</h4><img class="chapter-shot" loading="lazy" draggable="false" @contextmenu.prevent :src="monitoringImages[10].image" :alt="monitoringImages[10].title">
<p>Der Bereich Alerts dient zur Überwachung auffälliger Veränderungen in der Nutzung von Nachrichteninhalten durch Publisher.</p>
<p>Das System stellt Warnmeldungen bereit, die auf relevante Veränderungen im Nutzungsverhalten hinweisen.</p>
<h5>Übersicht der Warnmeldungen</h5>
<p>Im oberen Bereich werden drei zentrale Kennzahlen angezeigt.</p>
<p>Open Alerts: Anzahl der aktuell offenen Warnmeldungen, die noch bearbeitet werden müssen.</p>
<p>Resolved: Anzahl der Warnmeldungen, die bereits manuell als erledigt markiert wurden.</p>
<p>Total Alerts: Gesamtanzahl aller offenen und erledigten Warnmeldungen.</p>
<h5>Alert-Tabelle</h5>
<p>Die Tabelle enthält folgende Informationen:</p>
<table><thead><tr><th>Spalte</th><th>Beschreibung</th></tr></thead><tbody><tr><td>Publisher</td><td>Betroffener Publisher</td></tr><tr><td>Status</td><td>Aktueller Bearbeitungsstatus</td></tr><tr><td>Message</td><td>Beschreibung der erkannten Veränderung</td></tr><tr><td>Change</td><td>Prozentuale Veränderung der Nutzung</td></tr><tr><td>Created</td><td>Zeitpunkt der Erstellung</td></tr><tr><td>Resolved</td><td>Zeitpunkt der Erledigung</td></tr></tbody></table>
<h5>Bearbeitung der Warnmeldungen</h5>
<p>Warnmeldungen können nach ihrem Status gefiltert werden.</p>
<p>Dabei stehen die Ansichten Open, Resolved und All zur Verfügung.</p>
<p>Zusätzlich können die Meldungen nach bestimmten Regeln eingeschränkt werden.</p>
<p>Über die verfügbaren Aktionen lassen sich offene Warnmeldungen als erledigt markieren, erledigte Meldungen wieder öffnen oder Einträge löschen.</p>
<h5>Beispiel einer Warnmeldung</h5>
<p>Wenn ein Publisher seine durchschnittliche wöchentliche Nutzung innerhalb von 13 Wochen von einem auf 62 Artikel steigert, entspricht dies einer Erhöhung um 6100 %.</p>
<p>Eine solche Veränderung kann durch das Monitoring erkannt und als Warnmeldung angezeigt werden.</p>
<p>Die Alert-Funktion hilft dabei, aussergewöhnliche Nutzungsveränderungen frühzeitig zu erkennen und gezielt zu überprüfen.</p></section>
      </div>
    </dialog>
    <dialog ref="dialog" class="ecocharge-details" id="ecocharge-details" aria-labelledby="ecocharge-title" @close="restoreFocus" @cancel.prevent="closeProject" @click.self="closeProject">
      <header class="dialog-bar"><span>Projekte <b>/</b> EcoCharge</span><button aria-label="Projektansicht schliessen" type="button" autofocus @click="closeProject">×</button></header>
      <nav class="chapter-nav" aria-label="EcoCharge-Kapitel"><button type="button" v-for="(item,i) in screens" :key="item.title" :aria-current="(active === i) ? 'location' : undefined" @click="jump($event,i)">{{ item.title }}</button></nav><div class="doc-scroll" @scroll.passive="sync($event,true)"><section data-chapter v-for="(screen,i) in screens" :key="screen.title" class="case-layout" :class="{ cover: i === 0 }">
        <div class="case-copy">
          <p v-if="i === 0" class="case-label">SMART CHARGING · PWA</p>
          <h3 v-if="i === 0" id="ecocharge-title">EcoCharge</h3>
          <div>
            <h4 class="case-lead">{{ screen.heading || screen.title }}</h4>
            <p class="case-description">{{ screen.text }}</p>
            <div class="project-tools" v-if="i === 0"><strong>Technologien &amp; Tools</strong><ul><li v-for="tool in technologies" :key="tool">{{ tool }}</li></ul></div>
          </div>
          <div v-if="i === 0" class="resource-links"><a href="https://ecocharge.free.nf/login.php" target="_blank" rel="noopener noreferrer">Live-Demo ↗</a><a href="https://showroom-bcs.digisus-lab.ch/ecocharge-smartes-laden-fur-dein-elektroauto/" target="_blank" rel="noopener noreferrer">Dokumentation ↗</a></div>
        </div>
        <figure class="screen-preview">
          <div class="screen-stage" @contextmenu.prevent>
            <Transition name="picture">
              <img draggable="false" :key="screen.images[active === i ? slide : 0]" :src="screen.images[active === i ? slide : 0]" :alt="'EcoCharge – ' + screen.title + ', Bild ' + ((active === i ? slide : 0) + 1)">
            </Transition>
          </div>
          <figcaption v-if="screen.images.length > 1">
            <div v-if="screen.images.length > 1" class="gallery-controls">
              <button class="arrow" type="button" aria-label="Vorheriges Bild" @click="active !== i && selectScreen(i); step(-1)">‹</button>
              <span>{{ (active === i ? slide : 0) + 1 }} / {{ screen.images.length }}</span>
              <button class="arrow" type="button" aria-label="Nächstes Bild" @click="active !== i && selectScreen(i); step(1)">›</button>
            </div>
          </figcaption>
        </figure>
      </section>
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
.screen-stage {
  display:grid; place-items:center; height:clamp(280px,54vh,480px); padding:14px;
  border:1px solid #354740; border-radius:14px; overflow:hidden; user-select:none;
  background:radial-gradient(ellipse at 50% 35%, #334b40, #17231f 85%);
}
.screen-stage img {
  grid-area:1/1; display:block; width:auto; height:auto; max-width:100%; max-height:100%; min-height:0;
  object-fit:contain; border-radius:6px; box-shadow:0 2px 5px #08130c55,0 8px 20px #08130c55;
}
.screen-stage { grid-template: minmax(0,1fr) / minmax(0,1fr); }
.cover .screen-stage { height:auto; padding:0; display:block; }
.cover .screen-stage img { width:100%; border-radius:0; }
.screen-preview figcaption { display:flex; align-items:center; justify-content:space-between; gap:8px; padding:9px 2px; color:#b9c9bf; font:12px/1.4 var(--mono); }
.screen-preview figcaption a { color:inherit; text-underline-offset:3px; }
.gallery-controls { display:flex; align-items:center; gap:8px; font-variant-numeric:tabular-nums; }
@media(max-width:680px) {
 .case-layout { grid-template-columns:minmax(0,1fr); }
 .screen-list { gap:2px 12px; padding-inline:14px; }
 .screen-list button { font-size:13px; }
 .screen-stage { height:clamp(270px,50svh,440px); padding:10px; }
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

.ecocharge-card { cursor: pointer; }
.monitoring-card { cursor: pointer; }
.monitor-cover { background: #15252b; display:grid; place-items:center; }

.monitor-cover img,.monitor-shot { width:100%; height:100%; object-fit:contain; }
.monitor-body { padding:clamp(20px,4vw,42px); }
.monitor-body h3 { font-size:2rem; margin:0 0 16px; }
.monitor-shot { display:block; max-height:60vh; }
.monitor-select { display:flex; align-items:center; flex-wrap:wrap; gap:10px; margin:18px 0; }
.monitor-select select { font:inherit; max-width:100%; padding:7px 10px; border-radius:6px; }
.monitor-figure { margin:0; }
.monitor-stage { display:grid; grid-template: minmax(0,1fr) / minmax(0,1fr); place-items:center; aspect-ratio:16/10; max-height:55vh; overflow:hidden; background:#243431; border:1px solid #40524b; border-radius:10px; }
.monitor-stage img { grid-area:1/1; min-height:0; max-height:100%; object-fit:contain; }
.monitor-caption { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-top:10px; }
.monitor-caption .gallery-controls { margin:0; }
.monitoring-card .project-content { flex: none; }
.resource-links { display: flex; flex-wrap: wrap; gap: 16px; margin-block: 18px; }
.arrow { display:grid; place-items:center; width:36px; height:36px; border-radius:50%; border:1px solid #496052; background:#1c2c24; color:#def2e4; font:22px/1 system-ui; cursor:pointer; }
.picture-enter-active, .picture-leave-active { transition: opacity .36s ease, transform .36s ease; }
.picture-enter-from { opacity: 0; transform: translateX(7px); }
.picture-leave-to { opacity: 0; transform: translateX(-7px); }
.pane-enter { animation: pane-in .3s ease-out; }
@keyframes pane-in { from { opacity: 0; transform: translateY(5px); } }
@media (prefers-reduced-motion: reduce) {
  .picture-enter-active, .picture-leave-active { transition: none; }
  .pane-enter { animation: none; }
}
.monitor-cover img,.coverShot .monitor-shot { width:100%; height:100%; display:block; object-fit:cover; }
.monitor-cover { padding:0; overflow:hidden; }
.project-tools { margin:18px 0; padding:12px 16px; background:#1c3028; border-left:3px solid #99d6ac; border-radius:5px; }
.project-tools strong { font-size:13px; color:#ddf3e4; }
.project-tools ul { display:flex; flex-wrap:wrap; gap:6px; list-style:none; padding:0; margin:8px 0 0; }
.project-tools li { padding:3px 9px; border-radius:5px; color:#e0f1e5; background:#304b3d; font-size:13px; }
.doc-copy { max-width:72ch; margin-top:24px; line-height:1.65; overflow-wrap:anywhere; }
.doc-copy h4 { font-size:1.4rem; }
.doc-copy h5 { font-size:1.05rem; margin:20px 0 6px; }
.doc-copy p,.doc-copy ul { margin:9px 0; }
.doc-copy ul { padding-left:20px; }
.doc-copy table { border-collapse:collapse; width:100%; }
.doc-copy td,.doc-copy th { text-align:left; vertical-align:top; border-bottom:1px solid #415248; padding:6px; }

.ecocharge-details[open] { display:grid; grid-template-rows:auto auto minmax(0,1fr); height:min(820px,90dvh); overflow:hidden; }
.doc-scroll { overflow-y:auto; overscroll-behavior:contain; min-height:0; }
.chapter-nav { display:flex; overflow-x:auto; gap:14px; padding:0 20px; border-block:1px solid #34403b; background:#14211d; }
.chapter-nav button { flex:none; background:none; border:0; border-bottom:2px solid transparent; color:#c5d1cb; font:inherit; font-size:14px; padding:12px 2px; cursor:pointer; }
.chapter-nav button[aria-current] { border-color:#a6d9b7; color:#dcf5e4; }
.chapter-shot { display:block; width:100%; height:auto; margin:16px 0; border-radius:8px; }
.doc-copy { max-width:none; padding-block:20px; margin:0; }
.doc-copy p,.doc-copy ul,.doc-copy table { max-width:72ch; }
.doc-scroll [data-chapter] + [data-chapter] { border-top:1px solid #35433c; }
@media(min-width:901px) {
 .projects-grid .project-card { display:grid; grid-row:span 6; grid-template-rows:subgrid; row-gap:0; }
 .projects-grid .project-content { display:grid; grid-row:span 5; grid-template-rows:subgrid; row-gap:0; }
 .projects-grid .project-content > * { align-self:start; }
 .projects-grid .project-actions { margin-top:0; }
}
</style>
