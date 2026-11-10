// Inhalte der Monitoring-Projektansicht. "body" ist statisches HTML aus diesem Repo.
import cover from "../../assets/images/monitoring_ksda/title_picture.webp";
import loginShot from "../../assets/images/monitoring_ksda/login_page_monitoringksda.png";
import overviewShot from "../../assets/images/monitoring_ksda/overview1.png";
import productionShot from "../../assets/images/monitoring_ksda/article_production.png";
import classificationShot from "../../assets/images/monitoring_ksda/article_production2.png";
import languageShot from "../../assets/images/monitoring_ksda/channels_by_language.png";
import imageUsageShot from "../../assets/images/monitoring_ksda/image_usage.png";
import publisherShot from "../../assets/images/monitoring_ksda/publisher.png";
import topArticlesShot from "../../assets/images/monitoring_ksda/top50_00.png";
import timelineShot from "../../assets/images/monitoring_ksda/usage_timeline.png";
import alertsShot from "../../assets/images/monitoring_ksda/alerts.png";

export { cover as monitoringCover };

export const monitorTools = ["Django / Python", "HTML", "CSS", "JavaScript", "MySQL", "PostgreSQL", "Claude"];

export const monitoringChapters = [
  {
    short: "Einleitung",
    title: "Einleitung",
    image: cover,
    intro: "Das Keystone SDA Monitoring Dashboard ist eine webbasierte Analyseplattform zur Überwachung und Auswertung von Nachrichtenartikeln, deren Nutzung durch Publisher sowie der Verwendung von Bildmaterial.",
    caption: "Keystone SDA Monitoring",
    body: `<p>Die Anwendung stellt verschiedene Kennzahlen, Diagramme und Tabellen zur Verfügung, um die Artikelproduktion, Nutzungsmuster und Aktivitäten einzelner Publisher transparent darzustellen.</p>
<p>Das Dashboard ermöglicht es, Daten über unterschiedliche Zeiträume auszuwerten, gezielt nach Kriterien zu filtern und Veränderungen in der Nutzung zu erkennen.</p>
<p>Die Benutzeroberfläche ist in mehrere Bereiche unterteilt: Article Overview, Article Usage, Unused Articles, Image Usage, Publishers und Alerts.</p>`,
  },
  {
    short: "Login",
    title: "Login und Authentifizierung",
    image: loginShot,
    intro: "Die Login-Seite bildet den Einstiegspunkt in die Keystone SDA Monitoring-Plattform.",
    caption: "Anmeldung mit Google oder Zugangsdaten",
    body: `<p>Benutzer können sich über zwei verschiedene Anmeldemethoden authentifizieren.</p>
<p>Google-Anmeldung: Über die Google-Anmeldefunktion können sich Benutzer mit ihrem Google-Konto anmelden.</p>
<p>Benutzername und Passwort: Alternativ steht eine klassische Anmeldung zur Verfügung, bei der die Benutzer ihre Zugangsdaten manuell eingeben.</p>
<p>Nach erfolgreicher Authentifizierung erhalten Benutzer Zugriff auf die Monitoring- und Analysefunktionen entsprechend ihren Berechtigungen.</p>`,
  },
  {
    short: "Übersicht",
    title: "Article Overview – Artikelübersicht",
    image: overviewShot,
    intro: "Die Seite Article Overview bietet eine zentrale Übersicht über die Artikelproduktion und die Nutzung der bereitgestellten Nachrichteninhalte.",
    caption: "Zeitraum, Filter und Kennzahlen in der Artikelübersicht",
    body: `<p>Im oberen Bereich befindet sich eine Filtersektion, über die Benutzer den gewünschten Auswertungszeitraum sowie weitere Kriterien definieren können.</p><div class="reading-topic"><h5>Filtermöglichkeiten</h5><div>
<ul><li>Period: Auswahl zwischen Jahr, Monat, Woche und Tag.</li><li>Start Date / End Date: Manuelle Festlegung des Auswertungszeitraums.</li><li>Language: Filterung nach Sprache.</li><li>Published: Einschränkung nach Veröffentlichungsstatus.</li><li>Inland / Ausland: Unterscheidung zwischen nationalen und internationalen Nachrichten.</li><li>RTP: Filterung nach Ready-to-Publish-Kriterien.</li><li>Service: Auswahl einzelner Nachrichtendienste.</li><li>Channel: Filterung nach Themenkanälen.</li><li>Story Type: Auswahl verschiedener Artikeltypen.</li><li>Genre: Einschränkung nach journalistischen Inhaltskategorien.</li></ul>
</div></div><div class="reading-topic"><h5>Kennzahlen</h5><div>
<p>Unterhalb der Filter werden verschiedene Statistikfelder angezeigt.</p>
<p>Total Articles: Zeigt die Gesamtanzahl aller Artikel im gewählten Zeitraum.</p>
<p>Published: Gibt an, wie viele Artikel von Publishern verwendet beziehungsweise veröffentlicht wurden.</p>
<p>Not Published: Zeigt die Anzahl der Artikel ohne registrierte Nutzung.</p>
<p>No RTP: Zeigt die Anzahl der Artikel ohne Ready-to-Publish-Kennzeichnung.</p>
<p>Zusätzlich werden prozentuale Veränderungen gegenüber einem Vergleichszeitraum dargestellt.</p>
<p>Diese Kennzahlen ermöglichen eine schnelle Einschätzung der Artikelproduktion und der Nutzung durch Publisher.</p></div></div>`,
  },
  {
    short: "Produktion",
    title: "Article Production – Artikelproduktion",
    image: productionShot,
    intro: "Der Bereich Article Production visualisiert die tägliche Artikelproduktion anhand eines gestapelten Balkendiagramms.",
    caption: "Artikel pro Tag, aufgeteilt nach Themen",
    body: `<p>Die horizontale Achse zeigt die einzelnen Tage des ausgewählten Zeitraums. Die vertikale Achse stellt die Anzahl produzierter Artikel dar.</p>
<p>Jeder Balken repräsentiert die gesamte Artikelproduktion eines Tages und ist in verschiedene Themenbereiche unterteilt.</p>
<p>Dazu gehören beispielsweise Politik, Sport, Wirtschaft und Finanzen, Katastrophen und Unfälle, Justiz und Kriminalität sowie weitere Nachrichtenkategorien.</p>
<p>Jeder Themenbereich wird durch eine eigene Farbe dargestellt.</p>
<p>Dadurch lässt sich erkennen, wie sich die tägliche Artikelproduktion auf die verschiedenen Themen verteilt.</p>
<p>Das Diagramm unterstützt insbesondere die Analyse von Produktionsschwankungen, thematischen Schwerpunkten und aussergewöhnlich hohen oder niedrigen Artikelmengen.</p>`,
  },
  {
    short: "Inhaltsanalyse",
    title: "Artikelklassifizierung und Inhaltsanalyse",
    image: classificationShot,
    intro: "Dieser Bereich erweitert die Artikelproduktionsanalyse durch verschiedene Kreis- beziehungsweise Donut-Diagramme.",
    caption: "Verteilung der Artikel nach Metadaten",
    body: `<p>Die Diagramme zeigen die Verteilung der Artikel nach unterschiedlichen Metadaten und Klassifizierungsmerkmalen.</p><div class="reading-topic"><h5>Sentiment</h5><div>
<p>Das Sentiment-Diagramm zeigt die emotionale Einordnung der Nachrichtenartikel.</p>
<p>Die Inhalte werden beispielsweise in Neutral, Negative, Positive und Critical unterteilt.</p>
<p>Dadurch lässt sich erkennen, welche Stimmungen innerhalb der produzierten Nachrichten dominieren.</p>
</div></div><div class="reading-topic"><h5>Language</h5><div>
<p>Das Sprachdiagramm stellt die Verteilung der Artikel auf die verschiedenen Sprachen dar.</p>
<p>Im gezeigten Beispiel werden Deutsch, Französisch und Italienisch berücksichtigt.</p>
<p>Diese Darstellung ermöglicht eine Analyse der sprachlichen Verteilung der Nachrichtenproduktion.</p>
</div></div><div class="reading-topic"><h5>Story Type</h5><div>
<p>Das Diagramm Story Type zeigt die Verteilung unterschiedlicher Nachrichtenformate.</p>
<p>Dazu gehören beispielsweise Einzelmeldungen, Auftakte, Zusammenfassungen, Bulletins und Tagesprogramme.</p>
</div></div><div class="reading-topic"><h5>Genre</h5><div>
<p>Das Genre-Diagramm zeigt die journalistische Einordnung der Inhalte.</p>
<p>Beispiele sind Nachrichten, Programme, Resultate, Interviews, Reportagen und Hintergrundberichte.</p>
</div></div><div class="reading-topic"><h5>Channel</h5><div>
<p>Das Channel-Diagramm visualisiert die Verteilung der Nachrichten nach Themenbereichen wie Politik, Sport, Wirtschaft oder Unterhaltung.</p>
</div></div><div class="reading-topic"><h5>User Needs</h5><div>
<p>Das Diagramm User Needs stellt dar, welche Informationsbedürfnisse durch die Nachrichteninhalte angesprochen werden.</p>
<p>Beispielsweise werden Inhalte den Kategorien Inform Me, Give Me Background, Touch Me und Guide Me zugeordnet.</p>
</div></div><div class="reading-topic"><h5>Inland / Ausland</h5><div>
<p>Dieses Diagramm zeigt das Verhältnis zwischen nationalen und internationalen Nachrichten.</p>
<p>Die verschiedenen Auswertungen ermöglichen eine detaillierte Analyse der inhaltlichen Zusammensetzung der Artikelproduktion.</p></div></div>`,
  },
  {
    short: "Sprachen",
    title: "Channels by Language – Themenverteilung nach Sprache",
    image: languageShot,
    intro: "Das Diagramm Channels by Language zeigt die Verteilung der Nachrichtenartikel auf verschiedene Themenbereiche, aufgeschlüsselt nach Sprache.",
    caption: "Themenverteilung im Sprachvergleich",
    body: `<p>Auf der horizontalen Achse befinden sich die einzelnen Themenkategorien, beispielsweise Politik, Sport, Wirtschaft und Finanzen sowie Katastrophen und Unfälle.</p>
<p>Die vertikale Achse zeigt die Anzahl der Artikel.</p>
<p>Für jede Kategorie werden die Sprachen Deutsch, Französisch und Italienisch farblich unterschieden dargestellt.</p>
<p>Durch die gestapelten Balken können Benutzer sowohl die Gesamtmenge der Artikel innerhalb eines Themenbereichs als auch deren sprachliche Verteilung vergleichen.</p>
<p>Diese Funktion hilft dabei, Unterschiede zwischen den Sprachregionen zu erkennen und thematische Schwerpunkte innerhalb der Nachrichtenproduktion zu analysieren.</p>`,
  },
  {
    short: "Bildnutzung",
    title: "Image Usage – Bildnutzungsanalyse",
    image: imageUsageShot,
    intro: "Der Bereich Image Usage dient der Analyse der Nutzung von Bildmaterial durch Publisher.",
    caption: "Bildverwendungen nach Publisher und Thema",
    body: `<p>Die Seite ermöglicht es, die Verwendung einzelner Bilder über einen bestimmten Zeitraum zu untersuchen.</p><div class="reading-topic"><h5>Filtermöglichkeiten</h5><div>
<p>Benutzer können den Auswertungszeitraum über die Optionen Jahr, Monat, Woche oder Tag festlegen.</p>
<p>Alternativ können ein Start- und Enddatum manuell ausgewählt werden.</p>
<p>Weitere Filter ermöglichen die Einschränkung nach Publishern beziehungsweise Publisher-Gruppen, Match Scores, Themenbereichen, Kundenstatus und Schweizer Publishern.</p>
</div></div><div class="reading-topic"><h5>Top 50 Used Images</h5><div>
<p>Die Tabelle Top 50 Used Images zeigt die am häufigsten verwendeten Bilder.</p>
<p>Zu jedem Eintrag werden folgende Informationen dargestellt:</p>
<ul><li>Image: Vorschau des jeweiligen Bildes.</li><li>ID: Eindeutige Bildkennung.</li><li>Topic: Zugeordneter Themenbereich.</li><li>Publisher: Publisher, bei dem die Nutzung registriert wurde.</li><li>Usages: Anzahl der erfassten Bildverwendungen.</li></ul>
</div></div><div class="reading-topic"><h5>Daily Average Benchmark</h5><div>
<p>Dieser Bereich ermöglicht den Vergleich der durchschnittlichen täglichen Bildnutzung mit einem Referenzwert.</p>
</div></div><div class="reading-topic"><h5>By Topic</h5><div>
<p>Die Auswertung By Topic zeigt, wie sich die Bildnutzung auf verschiedene Themenbereiche verteilt.</p>
<p>Die Bildnutzungsanalyse unterstützt dabei, häufig verwendetes Bildmaterial zu identifizieren und Nutzungsmuster der Publisher auszuwerten.</p></div></div>`,
  },
  {
    short: "Publisher",
    title: "Publishers – Publisher-Verwaltung und Übersicht",
    image: publisherShot,
    intro: "Der Bereich Publishers stellt eine zentrale Übersicht über die erfassten Publisher und Publisher-Gruppen zur Verfügung.",
    caption: "Publisher und ihre ausgewiesenen Nutzungen",
    body: `<p>Die Tabelle zeigt wichtige Informationen über die Aktivitäten und die Nutzung der Nachrichteninhalte.</p><div class="reading-topic"><h5>Such- und Filterfunktionen</h5><div>
<p>Über die Suchfunktion können Publisher anhand ihres Namens oder ihrer Domain gefunden werden.</p>
<p>Zusätzlich stehen Filter für den Kundenstatus, RTP und Schweizer Publisher zur Verfügung.</p>
</div></div><div class="reading-topic"><h5>Publisher-Tabelle</h5><div>
<p>Die Tabelle enthält folgende Informationen:</p>
<table><thead><tr><th>Spalte</th><th>Beschreibung</th></tr></thead><tbody><tr><td>Publisher</td><td>Name des Publishers</td></tr><tr><td>Domain</td><td>Zugehörige Internetdomain</td></tr><tr><td>Customer</td><td>Kennzeichnung des Kundenstatus</td></tr><tr><td>Online</td><td>Anzahl der Online-Nutzungen</td></tr><tr><td>Print</td><td>Anzahl der Print-Nutzungen</td></tr><tr><td>Images</td><td>Anzahl der Bildnutzungen</td></tr><tr><td>Unique Stories</td><td>Anzahl unterschiedlicher Nachrichtenartikel</td></tr><tr><td>Last Seen</td><td>Datum der zuletzt erfassten Aktivität</td></tr><tr><td>Total</td><td>Gesamtzahl der ausgewiesenen Nutzungen</td></tr></tbody></table>
<p>Die Publisher können anhand der dargestellten Kennzahlen miteinander verglichen werden.</p>
<p>Neben einzelnen Publishern können auch Publisher-Gruppen betrachtet werden.</p>
<p>Dadurch eignet sich dieser Bereich zur Analyse der Kundenaktivität und zur Identifikation besonders aktiver Publisher.</p></div></div>`,
  },
  {
    short: "Top 50",
    title: "Top 50 Articles und Unused Articles",
    image: topArticlesShot,
    intro: "Dieser Bereich stellt zwei wichtige Auswertungen gegenüber: die am häufigsten genutzten Artikel und die Artikel ohne registrierte Nutzung.",
    caption: "Häufig genutzte Artikel und Artikel ohne registrierte Nutzung",
    body: `<div class="reading-topic"><h5>Top 50 Articles</h5><div>
<p>Die Tabelle Top 50 Articles zeigt die 50 Artikel mit den höchsten Nutzungszahlen.</p>
<p>Zu jedem Artikel werden der Titel, die Anzahl der Verwendungen sowie zusätzliche Metadaten angezeigt.</p>
<p>Zu diesen Metadaten gehören beispielsweise der zugehörige Nachrichtendienst, die Sprache und der Themenbereich.</p>
<p>Die Artikel werden nach der Anzahl ihrer Nutzungen sortiert.</p>
<p>Dadurch lassen sich besonders erfolgreiche beziehungsweise häufig verwendete Nachrichten identifizieren.</p>
</div></div><div class="reading-topic"><h5>Articles not used</h5><div>
<p>Die Tabelle Articles not used zeigt Artikel, für die keine Nutzung registriert wurde.</p>
<p>Zu jedem Artikel werden der Titel, der Nachrichtendienst, die Sprache, der Themenbereich und das Datum dargestellt.</p>
<p>Diese Funktion unterstützt die Analyse von nicht verwendeten Nachrichteninhalten.</p>
<p>Durch die Gegenüberstellung beider Tabellen können Unterschiede zwischen häufig genutzten und nicht genutzten Artikeln untersucht werden.</p></div></div>`,
  },
  {
    short: "Nutzungsverlauf",
    title: "Usage Timeline – Nutzungsverlauf und Publisher-Vergleich",
    image: timelineShot,
    intro: "Der Bereich Usage Timeline visualisiert die Nutzung von Nachrichtenartikeln durch ausgewählte Publisher über einen bestimmten Zeitraum.",
    caption: "Zeitlicher Vergleich ausgewählter Publisher",
    body: `<div class="reading-topic"><h5>Usage Timeline</h5><div>
<p>Das Balkendiagramm stellt die tägliche Artikelverwendung dar.</p>
<p>Die horizontale Achse zeigt die einzelnen Tage, während die vertikale Achse die Anzahl der Nutzungen darstellt.</p>
<p>Jeder Publisher wird durch eine eigene Farbe gekennzeichnet.</p>
<p>Die Darstellung ermöglicht einen direkten Vergleich der Nutzungsaktivität verschiedener Publisher.</p>
<p>Zusätzlich können unterschiedliche Nutzungsstufen wie Max, High und Medium berücksichtigt werden.</p>
<p>Die Legende unterscheidet zwischen aktuellen und vorherigen Vergleichswerten, wobei verblasste Balken den vorherigen und kräftige Balken den aktuellen Zeitraum repräsentieren.</p>
</div></div><div class="reading-topic"><h5>Daily Average Benchmark</h5><div>
<p>Dieser Bereich zeigt die durchschnittliche tägliche Nutzung ausgewählter Publisher im Vergleich zu einem globalen Durchschnitt.</p>
<p>Dadurch kann die Aktivität einzelner Publisher besser eingeordnet werden.</p>
</div></div><div class="reading-topic"><h5>By Service</h5><div>
<p>Die Auswertung By Service zeigt, wie sich die Artikelverwendungen auf unterschiedliche Nachrichtendienste verteilen.</p>
<p>Dabei können die Nutzungszahlen sowohl gesamthaft als auch für einzelne Publisher beziehungsweise Publisher-Gruppen betrachtet werden.</p>
</div></div><div class="reading-topic"><h5>Selected Publishers</h5><div>
<p>Die Tabelle Selected Publishers zeigt die für den Vergleich ausgewählten Publisher und Gruppen.</p>
<p>Für jeden Publisher werden die gesamte Nutzung sowie die Aufteilung zwischen Online- und Print-Nutzungen angezeigt.</p>
<p>Die Kombination dieser Funktionen ermöglicht eine detaillierte Analyse der Publisher-Aktivität und des zeitlichen Nutzungsverhaltens.</p></div></div>`,
  },
  {
    short: "Alerts",
    title: "Alerts – Warnmeldungen und Monitoring",
    image: alertsShot,
    intro: "Der Bereich Alerts dient zur Überwachung auffälliger Veränderungen in der Nutzung von Nachrichteninhalten durch Publisher.",
    caption: "Status und Bearbeitung der Warnmeldungen",
    body: `<p>Das System stellt Warnmeldungen bereit, die auf relevante Veränderungen im Nutzungsverhalten hinweisen.</p><div class="reading-topic"><h5>Übersicht der Warnmeldungen</h5><div>
<p>Im oberen Bereich werden drei zentrale Kennzahlen angezeigt.</p>
<p>Open Alerts: Anzahl der aktuell offenen Warnmeldungen, die noch bearbeitet werden müssen.</p>
<p>Resolved: Anzahl der Warnmeldungen, die bereits manuell als erledigt markiert wurden.</p>
<p>Total Alerts: Gesamtanzahl aller offenen und erledigten Warnmeldungen.</p>
</div></div><div class="reading-topic"><h5>Alert-Tabelle</h5><div>
<p>Die Tabelle enthält folgende Informationen:</p>
<table><thead><tr><th>Spalte</th><th>Beschreibung</th></tr></thead><tbody><tr><td>Publisher</td><td>Betroffener Publisher</td></tr><tr><td>Status</td><td>Aktueller Bearbeitungsstatus</td></tr><tr><td>Message</td><td>Beschreibung der erkannten Veränderung</td></tr><tr><td>Change</td><td>Prozentuale Veränderung der Nutzung</td></tr><tr><td>Created</td><td>Zeitpunkt der Erstellung</td></tr><tr><td>Resolved</td><td>Zeitpunkt der Erledigung</td></tr></tbody></table>
</div></div><div class="reading-topic"><h5>Bearbeitung der Warnmeldungen</h5><div>
<p>Warnmeldungen können nach ihrem Status gefiltert werden.</p>
<p>Dabei stehen die Ansichten Open, Resolved und All zur Verfügung.</p>
<p>Zusätzlich können die Meldungen nach bestimmten Regeln eingeschränkt werden.</p>
<p>Über die verfügbaren Aktionen lassen sich offene Warnmeldungen als erledigt markieren, erledigte Meldungen wieder öffnen oder Einträge löschen.</p>
</div></div><div class="reading-topic"><h5>Beispiel einer Warnmeldung</h5><div>
<p>Wenn ein Publisher seine durchschnittliche wöchentliche Nutzung innerhalb von 13 Wochen von einem auf 62 Artikel steigert, entspricht dies einer Erhöhung um 6100 %.</p>
<p>Eine solche Veränderung kann durch das Monitoring erkannt und als Warnmeldung angezeigt werden.</p>
<p>Die Alert-Funktion hilft dabei, aussergewöhnliche Nutzungsveränderungen frühzeitig zu erkennen und gezielt zu überprüfen.</p></div></div>`,
  },
];
