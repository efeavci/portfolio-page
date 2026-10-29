<script setup>
import profileImage from "../../assets/images/profile.webp";
</script>

<template>
  <section class="section about" id="about">
    <div class="about-card">
      <div class="about-photo">
        <img
          :src="profileImage"
          alt="Efe Avci"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="about-copy">
        <p class="eyebrow">ÜBER MICH</p>
        <h2>Informatiker mit vielseitigem IT-Fokus.</h2>
        <p>
          Ich bin Informatiker EFZ und studiere Digital Business & Artificial
          Intelligence an der Berner Fachhochschule. Meine Erfahrung verbindet
          Softwareentwicklung, Datenanalyse und IT-Infrastruktur.
        </p>
        <p>
          Aktuell arbeite ich bei Keystone-SDA ATS AG im IT-Support sowie an
          internen Anwendungen und Datenanalyse-Lösungen.
        </p>
        <div class="about-chips">
          <span>Informatiker EFZ</span><span>BSc Digital Business & AI</span
          ><span>DE · EN · FR</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 901px) {
  .about-card {
    grid-template-columns: 360px 1fr;
    min-height: 480px;
  }

  .about-photo {
    min-height: 480px;
  }
}

@media (max-width: 900px) {
  .about-photo {
    width: min(100%, 420px);
    height: 440px;
    margin: 32px auto 0;
    border-radius: 20px;
  }
}

@media (max-width: 480px) {
  .about-photo {
    width: calc(100% - 40px);
    height: 340px;
    margin-top: 20px;
  }
}
</style>
