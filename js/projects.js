/*
//Highlight where you are in toc by ChatGPT
const projectsSection = document.getElementById("sideNav");
const projectsListItem = document.querySelector(
  "#content-list li:nth-child(2)"
);

window.addEventListener("scroll", () => {
  const projectsSectionRect = projectsSection.getBoundingClientRect();

  if (
    projectsSectionRect.top >= 0 &&
    projectsSectionRect.bottom <= window.innerHeight
  ) {
    projectsListItem.style.color = "red"; // Change the color when scrolled to the "projects" section
  } else {
    projectsListItem.style.color = "white"; // Reset the color
  }
});*/

//Color changes when #problem in on screeen by ChatGPT
/*const sideNavLinks = document.querySelectorAll(".sideNav a");
const problemSection = document.getElementById("problem");

window.addEventListener("scroll", () => {
  const rect = problemSection.getBoundingClientRect();
  const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (isInViewport) {
    sideNavLinks.forEach((link) => link.classList.add("active"));
  } else {
    sideNavLinks.forEach((link) => link.classList.remove("active"));
  }
});*/

//Color changes when on top of #problem by ChatGPT
const sideNavLinks = document.querySelectorAll(".sideNav a");
const problemSection = document.getElementById("problem");

window.addEventListener("scroll", () => {
  const rect = problemSection.getBoundingClientRect();
  const isInFrontOfProblem = rect.top > 0 && rect.bottom <= window.innerHeight;

  if (isInFrontOfProblem) {
    sideNavLinks.forEach((link) => link.classList.add("active"));
  } else {
    sideNavLinks.forEach((link) => link.classList.remove("active"));
  }
});

//Change position of side nav on scroll by ChatGPT

//#1 - sudden change of the position
/*
const sideNav = document.querySelector(".sideNav");
const banner = document.getElementById("banner");
const bannerHeight = banner.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > bannerHeight) {
    sideNav.style.top = "45vh";
  } else {
    sideNav.style.top = "500px";
  }
});
*/

//#2 - smooth, but side nav overlaps with banner
/*
const sideNav = document.querySelector(".sideNav");
const banner = document.getElementById("banner");
const bannerHeight = banner.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > bannerHeight) {
    sideNav.style.top = "45vh";
  } else {
    sideNav.style.top = "500px";
  }
});
*/

//#3 side nav shows-up form below on scroll (on accident)
/*
const sideNav = document.querySelector(".sideNav");
const banner = document.getElementById("banner");
const overviewSection = document.getElementById("overview");
const bannerHeight = banner.offsetHeight;

function adjustSideNavPosition() {
  const scrollTop = window.scrollY;

  if (scrollTop > bannerHeight) {
    sideNav.style.top = "45vh";
  } else {
    sideNav.style.top = `calc(45vh + ${bannerHeight - scrollTop}px)`;
  }
}

window.addEventListener("scroll", adjustSideNavPosition);
window.addEventListener("load", adjustSideNavPosition); // Additional event listener for initial position adjustment
*/

//#4 side nav pops-up on purpose
const sideNav = document.querySelector(".sideNav");
const banner = document.getElementById("banner");
const bannerHeight = banner.offsetHeight;

function adjustSideNavPosition() {
  const scrollTop = window.scrollY;

  if (scrollTop > bannerHeight) {
    sideNav.style.top = "45vh";
  } else {
    sideNav.style.top = `${100 - (scrollTop / bannerHeight) * 55}vh`;
  }
}

window.addEventListener("scroll", adjustSideNavPosition);
window.addEventListener("load", adjustSideNavPosition);
