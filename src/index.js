window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("sticky", window.scrollY > 50);
  });

  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
