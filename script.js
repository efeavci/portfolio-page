"use strict";

// Grundlagenübung: ein Klick löst einen Dialog aus.
document.getElementById("myButton").addEventListener("click", function () {
  alert("Hello World");
});

// DOM-Übung: Sichtbarkeit, Beschriftung und ARIA-Zustand synchron halten.
const toggleButton = document.getElementById("toggleButton");
const projectDetails = document.getElementById("project-details");

toggleButton.addEventListener("click", function () {
  projectDetails.hidden = !projectDetails.hidden;
  const expanded = !projectDetails.hidden;
  toggleButton.setAttribute("aria-expanded", String(expanded));
  toggleButton.textContent = expanded ? "Details ausblenden" : "Details einblenden";
});

document.getElementById("year").textContent = new Date().getFullYear();
