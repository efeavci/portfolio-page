# Efe AI – kostenlose Cloudflare Workers AI

Das Portfolio-Frontend enthält bereits den Chat. Ohne konfigurierte API-URL zeigt es einen Hinweis und sendet keine Anfragen.

## Einmalige Einrichtung

1. Kostenloses Cloudflare-Konto erstellen.
2. Im Projektordner `worker/efe-ai` den Worker mit Wrangler bereitstellen (Node.js erforderlich):
   ```cmd
   cd worker\efe-ai
   npx wrangler login
   npx wrangler deploy
   ```
3. Die ausgegebene `https://...workers.dev`-URL kopieren.
4. Im Repository im Hauptordner eine Datei `.env.production` anlegen:
   ```env
   VITE_EFE_AI_API_URL=https://DEIN-WORKER.workers.dev
   ```
5. Portfolio neu bauen/deployen. Lokal kann die URL in `.env.local` stehen, aber der Worker akzeptiert nur den in `ALLOWED_ORIGIN` festgelegten Origin. Für lokale Tests temporär die Worker-Variable auf `http://localhost:5173` ändern.

**Kosten:** Workers AI hat ein kostenloses tägliches Kontingent, das sich ändern kann. In Cloudflare die aktuellen Free-Limits prüfen und keinen kostenpflichtigen Plan aktivieren. Bei Erreichen des Limits zeigt der Chat eine Fehlermeldung.

**Sicherheit vor öffentlicher Freigabe:** Ein CORS-Origin-Check ist kein vollständiger Missbrauchsschutz (Nicht-Browser-Clients können Origin setzen). Deshalb unbedingt ein serverseitiges Rate-Limit/Turnstile ergänzen, um das Gratis-Kontingent gegen automatisierte Anfragen zu schützen. Keine Geheimnisse in `VITE_*` ablegen. Der Worker verwendet eine Cloudflare-AI-Bindung, keinen API-Key im Browser.

**Datenschutz:** Chatnachrichten werden an Cloudflare übermittelt. Vor Freigabe Datenschutzerklärung entsprechend ergänzen und die Verarbeitung prüfen.
