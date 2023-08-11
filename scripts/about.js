document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let isNavbarScrolled = false;
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.02; // 10% of the window height
  
      if (scrollPosition > scrollThreshold && !isNavbarScrolled) {
        navbar.classList.add("scrolled");
        isNavbarScrolled = true;
      } else if (scrollPosition <= scrollThreshold && isNavbarScrolled) {
        navbar.classList.remove("scrolled");
        isNavbarScrolled = false;
      }
    });
  });
  