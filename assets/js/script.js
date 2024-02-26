window.addEventListener("scroll", function () {
  const fixedNavbar = document.querySelector(".fixed-navbar");
  const scrollSection = document.querySelector("#about-us");
  const navbarHeight = fixedNavbar.getBoundingClientRect().height;
  const scrollSectionPosition = scrollSection.getBoundingClientRect().top;

  if (scrollSectionPosition - navbarHeight < 0) {
    fixedNavbar.classList.add("fixed");
  } else {
    fixedNavbar.classList.remove("fixed");
  }
});
