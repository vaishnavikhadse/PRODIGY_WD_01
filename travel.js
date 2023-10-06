const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".trending__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  duration: 1000,
  interval: 500,
});

