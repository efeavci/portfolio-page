<script setup>
import { onBeforeUnmount, watch, ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FocusSection from './components/FocusSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import JourneySection from './components/JourneySection.vue'

const menuOpen = ref(false)
const technologies = [
  'Python',
  'Django',
  'JavaScript',
  'HTML',
  'CSS',
  'Chart.js',
  'MySQL',
  'PostgreSQL',
  'Linux',
  'Azure',
  'PowerShell',
  'Git',
]

const closeMenu = () => {
  menuOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''

  if (open) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <a class="skip-link" href="#content">Zum Inhalt</a>

  <header class="site-header">
    <div class="nav-shell">
      <a class="brand" href="#top">EA<span>.</span></a>

      <nav id="main-menu" :class="{ open: menuOpen }" aria-label="Navigation">
        <a href="#work" @click="closeMenu">Projekte</a>
        <a href="#focus" @click="closeMenu">Was ich mache</a>
        <a href="#about" @click="closeMenu">Über mich</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#journey" @click="closeMenu">Werdegang</a>
      </nav>

      <a class="header-contact" href="mailto:efe.avci037@gmail.com">Kontakt</a>

      <button
        class="menu-button"
        :aria-label="menuOpen ? 'Menü schliessen' : 'Menü öffnen'"
        :aria-expanded="menuOpen"
        aria-controls="main-menu"
        @click="menuOpen = !menuOpen"
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
          :aria-hidden="group === 2"
        >
          <span v-for="tech in technologies" :key="`${group}-${tech}`">{{ tech }}</span>
        </div>
      </div>
    </section>

    <section class="stats">
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
      <p>
        Du möchtest mehr über mich oder meine Projekte erfahren? Ich freue mich auf deine
        Nachricht.
      </p>
      <div>
        <a class="button primary" href="mailto:efe.avci037@gmail.com">E-Mail schreiben</a>
        <a
          class="button secondary"
          href="https://github.com/efeavci"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub ↗</a>
      </div>
    </section>
  </main>

  <footer>
    <span>© {{ new Date().getFullYear() }} Efe Avci</span>
    <span>Bern, Schweiz</span>
    <a href="#top">Nach oben ↑</a>
  </footer>
</template>
