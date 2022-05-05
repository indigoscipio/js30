"use strict";

let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("active");
  });
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", (e) => {
    if (e.propertyName.includes("flex")) {
      panel.classList.toggle("textslide");
    }
  });
});
