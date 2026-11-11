// Inhalte der Monitoring-Projektansicht.
// `todo` markiert Stellen, die noch mit eigenen Angaben ergänzt werden müssen.
// Sie werden in der Ansicht als gestrichelter Hinweis angezeigt – vor dem Merge entfernen.
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

export const monitorTools = [
  "Django / Python",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "PostgreSQL",
  "Claude",
];

export const monitoringChapters = [
  {
    short: "Ausgangslage",
    title: "Ausgangslage",
    lead: "Keystone-SDA liefert laufend Nachrichtenartikel und Bilder auf Deutsch, Französisch und Italienisch an Publisher. Das Monitoring Dashboard macht sichtbar, was produziert wird, wer die Inhalte verwendet und was ungenutzt bleibt.",
    todo: [
      "Welches Problem gab es vorher? (z. B. Auswertungen von Hand, keine Übersicht über die Nutzung)",
      "Wer nutzt das Dashboard im Alltag?",
    ],
    images: [
      {
        src: cover,
        alt: "Titelbild des Keystone SDA Monitoring Dashboards",
        caption: "Keystone SDA Monitoring",
      },
    ],
  },
  {
    short: "Aufbau",
    title: "Lösung & Aufbau",
    lead: "Eine Django-Webanwendung mit relationaler Datenbank bündelt Produktions- und Nutzungsdaten an einem Ort. Alle Auswertungen lassen sich nach Zeitraum, Sprache, Dienst, Themenkanal und Genre filtern und mit der Vorperiode vergleichen.",
    points: [
      "Backend mit Django / Python, Daten in MySQL und PostgreSQL",
      "Anmeldung mit Google-Konto oder Benutzername und Passwort, Zugriff nach Berechtigung",
      "Einheitliche Filterleiste für alle Bereiche",
    ],
    todo: [
      "Woher kommen die Daten und wie gelangen sie ins System?",
      "Was war dein Anteil – allein oder im Team, was genau stammt von dir?",
    ],
    images: [
      {
        src: overviewShot,
        alt: "Artikelübersicht mit Filterleiste und Kennzahlen",
        caption: "Artikelübersicht mit Filtern und Kennzahlen",
      },
      {
        src: loginShot,
        alt: "Login-Seite des Monitoring Dashboards",
        caption: "Anmeldung mit Google oder Zugangsdaten",
      },
    ],
  },
  {
    short: "Inhalte",
    title: "Artikelproduktion & Inhalte",
    lead: "Wie viel wird produziert, zu welchen Themen und in welcher Sprache? Die tägliche Produktion ist nach Themen aufgeschlüsselt, sodass Schwankungen und Schwerpunkte auf einen Blick erkennbar sind.",
    points: [
      "Tagesproduktion als gestapeltes Balkendiagramm nach Thema",
      "Klassifizierung nach Sentiment, Genre, Story Type, User Needs und Inland/Ausland",
      "Themenverteilung im Vergleich der drei Sprachregionen",
    ],
    images: [
      {
        src: productionShot,
        alt: "Gestapeltes Balkendiagramm der täglichen Artikelproduktion nach Thema",
        caption: "Artikel pro Tag, aufgeteilt nach Themen",
      },
      {
        src: classificationShot,
        alt: "Donut-Diagramme zur Klassifizierung der Artikel",
        caption:
          "Verteilung nach Sentiment, Sprache, Genre und weiteren Merkmalen",
      },
      {
        src: languageShot,
        alt: "Balkendiagramm der Themen nach Sprache",
        caption: "Themenverteilung im Sprachvergleich",
      },
    ],
  },
  {
    short: "Publisher",
    title: "Nutzung durch Publisher",
    lead: "Welche Publisher verwenden welche Inhalte – und welche Artikel werden gar nicht genutzt? Die Nutzung lässt sich pro Publisher und über die Zeit verfolgen, auch für Bilder.",
    points: [
      "Publisher-Übersicht mit Online-, Print- und Bildnutzungen",
      "Nutzungsverlauf ausgewählter Publisher im Vergleich zur Vorperiode",
      "Top 50 der meistgenutzten Artikel und Artikel ohne jede Nutzung",
    ],
    images: [
      {
        src: publisherShot,
        alt: "Tabelle der Publisher mit Online-, Print- und Bildnutzungen",
        caption: "Publisher und ihre Nutzungen",
      },
      {
        src: timelineShot,
        alt: "Balkendiagramm der täglichen Nutzung pro Publisher",
        caption: "Nutzungsverlauf ausgewählter Publisher",
      },
      {
        src: topArticlesShot,
        alt: "Tabellen der meistgenutzten und ungenutzten Artikel",
        caption: "Top 50 und ungenutzte Artikel",
      },
      {
        src: imageUsageShot,
        alt: "Auswertung der Bildnutzung nach Publisher und Thema",
        caption: "Bildnutzung nach Publisher und Thema",
      },
    ],
  },
  {
    short: "Alerts",
    title: "Alerts",
    lead: "Auffällige Veränderungen sollen nicht erst Wochen später auffallen. Das System vergleicht die durchschnittliche wöchentliche Nutzung jedes Publishers über 13 Wochen und erstellt automatisch eine Warnmeldung, wenn sie stark abweicht.",
    stat: {
      value: "+6100 %",
      label:
        "Beispiel: Ein Publisher steigert seine durchschnittliche wöchentliche Nutzung von 1 auf 62 Artikel.",
    },
    points: [
      "Offene Meldungen werden geprüft und als erledigt markiert",
      "Filter nach Status (offen, erledigt, alle) und nach Regel",
    ],
    images: [
      {
        src: alertsShot,
        alt: "Übersicht der Warnmeldungen mit Status und prozentualer Veränderung",
        caption: "Warnmeldungen mit Status und Veränderung",
      },
    ],
  },
  {
    short: "Ergebnis",
    title: "Ergebnis & Learnings",
    lead: "Das Dashboard macht Produktion und Nutzung der Inhalte an einem Ort transparent – von der einzelnen Meldung bis zum Verhalten eines Publishers über Monate.",
    todo: [
      "Was hat das Dashboard konkret gebracht? (Zeitersparnis, Entscheidungen, Nutzung im Team)",
      "Was war technisch schwierig, und was hast du dabei gelernt?",
    ],
    images: [],
  },
];
