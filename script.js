"use strict";

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
