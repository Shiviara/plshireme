console.log("Changing color of side nav");
/*
//Highlight where you are in toc
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

//Color changes when #problem in on screeen
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

//Color changes when on top of #problem
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
