<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FocusSection from './components/FocusSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import JourneySection from './components/JourneySection.vue'

const email = 'efe.avci037@gmail.com'
const year = new Date().getFullYear()

const navLinks = [
  { href: '#work', label: 'Projekte' },
  { href: '#focus', label: 'Was ich mache' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Werdegang' },
  { href: '#about', label: 'Über mich' },
]

const technologies = [
  'Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'Chart.js',
  'MySQL', 'PostgreSQL', 'Linux', 'Azure', 'PowerShell', 'Git',
]

// Mobile Navigation: muss zum Breakpoint in main.css passen (max-width: 700px)
const menuOpen = ref(false)
const desktopQuery = typeof window !== 'undefined' ? window.matchMedia('(min-width: 701px)') : null

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function onKeydown(event) {
  if (event.key === 'Escape' && menuOpen.value) closeMenu()
}

function onBreakpointChange(event) {
  if (event.matches) closeMenu()
}

// Hintergrund nicht mitscrollen lassen, solange das Menü offen ist
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  desktopQuery?.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', onBreakpointChange)
  document.body.style.overflow = ''
})
</script>

<template>
  <a class="skip-link" href="#content">Zum Inhalt</a>

  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="#top" aria-label="Efe Avci – zum Seitenanfang">EA<span>.</span></a>

      <nav id="main-menu" :class="{ open: menuOpen }" aria-label="Hauptnavigation">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
      </nav>

      <a class="header-contact" :href="`mailto:${email}`">Kontakt</a>

      <button
        type="button"
        class="menu-button"
        :aria-label="menuOpen ? 'Menü schliessen' : 'Menü öffnen'"
        :aria-expanded="menuOpen"
        aria-controls="main-menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <main id="content">
    <HeroSection />

    <section class="ticker" aria-label="Technologien">
      <div class="ticker-track">
        <div
          v-for="group in 2"
          :key="group"
          class="ticker-group"
          :aria-hidden="group === 2 ? 'true' : undefined"
        >
          <span v-for="tech in technologies" :key="`${group}-${tech}`">{{ tech }}</span>
        </div>
      </div>
    </section>

    <section class="stats" aria-label="Kurzprofil">
      <div><small>Ausbildung</small><strong>EFZ</strong></div>
      <div><small>Studium</small><strong>BSc</strong></div>
      <div><small>Technologien</small><strong>20+</strong></div>
      <div><small>IT seit</small><strong>2020</strong></div>
    </section>

    <ProjectsSection />
    <FocusSection />
    <AboutSection />
    <SkillsSection />
    <JourneySection />

    <section class="contact" id="contact">
      <p class="eyebrow">KONTAKT</p>
      <h2>Lass uns etwas entwickeln.</h2>
      <p>Du möchtest mehr über mich oder meine Projekte erfahren? Ich freue mich auf deine Nachricht.</p>
      <div>
        <a class="button primary" :href="`mailto:${email}`">E-Mail schreiben</a>
        <a class="button secondary" href="https://github.com/efeavci" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </section>
  </main>

  <footer>
    <span>© {{ year }} Efe Avci</span>
    <span>Bern, Schweiz</span>
    <a href="#top">Nach oben ↑</a>
  </footer>
</template>
