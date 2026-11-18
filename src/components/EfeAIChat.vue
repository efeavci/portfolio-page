<script setup>
import { ref, nextTick } from "vue";
const endpoint = import.meta.env.VITE_EFE_AI_API_URL || "";
const open = ref(false);
const busy = ref(false);
const question = ref("");
const log = ref([]);
const scroller = ref(null);
const examples = ["Welche Projekte hat Efe entwickelt?", "Welche Technologien kennt Efe?", "Was ist EcoCharge?"];
const scroll = async () => { await nextTick(); scroller.value?.scrollTo({ top: scroller.value.scrollHeight, behavior: "smooth" }); };
async function send(value = question.value) {
  const text = value.trim();
  if (!text || busy.value || !endpoint || text.length > 500) return;
  question.value = "";
  log.value.push({ role: "user", content: text });
  busy.value = true;
  await scroll();
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: log.value.slice(-10) }),
      signal: AbortSignal.timeout(25000),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || typeof data.reply !== "string") throw new Error(data.error || "Der Dienst ist momentan nicht verfügbar.");
    log.value.push({ role: "assistant", content: data.reply });
  } catch {
    log.value.push({ role: "assistant", content: "Die KI ist gerade nicht erreichbar. Bitte versuche es später erneut." });
  } finally { busy.value = false; await scroll(); }
}
</script>

<template>
  <div class="efe-ai">
    <section v-if="open" class="efe-ai-panel" aria-label="Efe AI Chat">
      <header class="efe-ai-head">
        <div><strong>✦ Efe AI</strong><small>Fragen über Efe & seine Projekte</small></div>
        <button type="button" aria-label="Chat schliessen" @click="open = false">×</button>
      </header>
      <div ref="scroller" class="efe-ai-messages" role="log" aria-live="polite">
        <div class="efe-ai-msg assistant">Hallo! 👋 Ich bin Efe AI. Frag mich etwas über Efe, seine Projekte oder Technologien.</div>
        <div v-for="(item, i) in log" :key="i" class="efe-ai-msg" :class="item.role">{{ item.content }}</div>
        <div v-if="busy" class="efe-ai-msg assistant">Denke nach …</div>
        <template v-if="!endpoint"><p class="efe-ai-notice">Die KI-Anbindung wird gerade eingerichtet. Der Chat ist noch nicht öffentlich aktiv.</p></template>
        <div v-else-if="!log.length" class="efe-ai-examples">
          <button v-for="example in examples" :key="example" type="button" @click="send(example)">{{ example }} ↗</button>
        </div>
      </div>
      <form class="efe-ai-form" @submit.prevent="send()">
        <label class="efe-ai-sr" for="efe-ai-input">Deine Frage</label>
        <input id="efe-ai-input" v-model="question" maxlength="500" :disabled="!endpoint || busy" placeholder="Stelle deine Frage …" autocomplete="off" />
        <button type="submit" :disabled="!endpoint || busy || !question.trim()" aria-label="Nachricht senden">↑</button>
      </form>
      <p class="efe-ai-foot">KI kann Fehler machen. Bitte keine persönlichen Daten eingeben.</p>
    </section>
    <button class="efe-ai-launch" type="button" :aria-expanded="open" aria-label="Efe AI Chat öffnen oder schliessen" @click="open = !open"><span aria-hidden="true">{{ open ? "×" : "✦" }}</span> <span v-if="!open">Frag Efe AI</span></button>
  </div>
</template>

<style scoped>
.efe-ai { position: fixed; z-index: 90; right: clamp(14px, 3vw, 32px); bottom: 22px; font-family: var(--sans); }
.efe-ai-launch { display: flex; align-items: center; gap: 9px; margin-left: auto; border: 1px solid #4b79b3; border-radius: 999px; background: #1671c9; color: white; box-shadow: 0 10px 35px #0008; padding: 13px 20px; font: 650 14px var(--sans); cursor: pointer; }
.efe-ai-launch span:first-child { font-size: 19px; }
.efe-ai-panel { display: flex; flex-direction: column; width: min(390px, calc(100vw - 28px)); height: min(560px, calc(100dvh - 110px)); margin-bottom: 12px; border: 1px solid #303239; border-radius: 20px; background: #111115; box-shadow: 0 20px 80px #000b; overflow: hidden; }
.efe-ai-head { padding: 17px 20px; border-bottom: 1px solid #303239; display: flex; justify-content: space-between; align-items: center; }
.efe-ai-head strong, .efe-ai-head small { display: block; }
.efe-ai-head strong { font-size: 17px; }
.efe-ai-head small { color: #9898a3; font-size: 11px; margin-top: 2px; }
.efe-ai-head button { border: 0; background: none; color: #fff; font-size: 28px; cursor: pointer; }
.efe-ai-messages { flex: 1; min-height: 0; overflow-y: auto; padding: 18px; display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.efe-ai-msg { white-space: pre-wrap; overflow-wrap: anywhere; max-width: 94%; border-radius: 15px; padding: 11px 14px; font-size: 13px; line-height: 1.55; }
.efe-ai-msg.assistant { background: #222228; color: #ececf0; }
.efe-ai-msg.user { align-self: flex-end; background: #175caa; color: white; }
.efe-ai-examples { display: grid; gap: 8px; width: 100%; }
.efe-ai-examples button { text-align: left; border: 1px solid #343c4b; border-radius: 12px; padding: 10px; background: #161d28; color: #b5d7ff; cursor: pointer; font-size: 12px; }
.efe-ai-notice { color: #d7b67b; font-size: 12px; }
.efe-ai-form { display: flex; gap: 8px; padding: 12px; border-top: 1px solid #303239; }
.efe-ai-form input { min-width: 0; flex: 1; border: 1px solid #34343d; border-radius: 12px; background: #202025; color: white; padding: 11px; font: 13px var(--sans); }
.efe-ai-form button { border: 0; border-radius: 12px; width: 42px; background: #1671c9; color: white; cursor: pointer; font-size: 22px; }
.efe-ai-form button:disabled { opacity: .45; cursor: not-allowed; }
.efe-ai-foot { color: #85858d; text-align: center; font-size: 10px; padding: 0 12px 12px; }
.efe-ai-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
@media (max-width: 480px) { .efe-ai { right: 14px; bottom: 14px; } .efe-ai-panel { height: min(560px, calc(100dvh - 95px)); } }
</style>