console.log("Adding navigation");

//Universal footer with copyright
const Nav = `
    <a href="index.html"><h5>Marta Zarebska</h5></a>
      <div id="navR">
        <a href="index.html">Work</a>
        <a href="aboutme.html">About me</a>
        <button href="#" class="tertiary-cta">View CV</button>
      </div>
`;

document.getElementById("nav").innerHTML = Nav;
