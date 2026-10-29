# Portfolio – Efe Avci

Persönliche Portfolio-Seite mit Projekten, Skills, Ausbildung und Berufserfahrung.
Umgesetzt mit [Vue 3](https://vuejs.org/) und [Vite](https://vite.dev/).

## Voraussetzungen

- [Node.js](https://nodejs.org/) 20.19 oder neuer (empfohlen: 22 LTS)

## Lokal starten

```bash
npm install
npm run dev
```

Danach die angezeigte Adresse (meist `http://localhost:5173`) im Browser öffnen.

> `index.html` lässt sich **nicht** direkt per Doppelklick öffnen – die Seite wird von Vite gebaut und braucht den Dev-Server oder einen Build.

## Build

```bash
npm run build     # erzeugt den Ordner dist/
npm run preview   # zeigt den Build lokal an
```

## Veröffentlichen (GitHub Pages)

Bei jedem Push auf `main` baut der Workflow in `.github/workflows/deploy.yml` die Seite und veröffentlicht sie.
Einmalig nötig: im Repository unter **Settings → Pages → Source** „GitHub Actions“ auswählen.

## Projektstruktur

```
index.html              Einstiegspunkt
public/                 Dateien, die unverändert kopiert werden (Favicon)
src/main.js             Startet die Vue-App und lädt das CSS
src/App.vue             Seitengerüst: Navigation, Ticker, Kontakt, Footer
src/components/         Die einzelnen Abschnitte der Seite
assets/css/main.css     Gesamtes Styling
assets/fonts/           Lokal eingebundene Schriften (Inter, JetBrains Mono)
assets/images/          Bilder
```

## Inhalt

- Hero mit Kurzvorstellung
- Projekte (EcoCharge, dieses Portfolio)
- Schwerpunkte: Softwareentwicklung & Datenanalyse, Systemtechnik
- Über mich, Skills und Werdegang
- Kontakt per E-Mail und GitHub

## Barrierefreiheit & Responsive

- „Zum Inhalt“-Link für Tastaturnutzer
- Unter 700px wird die Navigation zu einem Menü-Button; es schliesst mit Escape, beim Klick auf einen Link und beim Vergrössern des Fensters
- Animationen werden bei `prefers-reduced-motion` deaktiviert

## Datenschutz

Schriften werden lokal ausgeliefert, es werden keine Daten an Google Fonts oder andere Drittanbieter übertragen.

## Lizenzen

Die Schriften Inter und JetBrains Mono stehen unter der SIL Open Font License 1.1 (siehe `assets/fonts/`).
