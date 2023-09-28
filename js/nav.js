console.log("Adding navigation");

//Universal footer with copyright
const Nav = `
    <a href="portfolio.html"><h5>Marta Zarebska</h5></a>
      <div id="navR">
        <a href="portfolio.html">Work</a>
        <a href="aboutme.html">About me</a>
        <button href="#" class="tertiary-cta">View CV</button>
      </div>
`;

document.getElementById("nav").innerHTML = Nav;
