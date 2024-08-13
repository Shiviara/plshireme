//Universal footer with copyright
const Footer = `
    <!--Contact-->
        <div class="left">
          <div id="contact">
            <h3>Marta Zarebska</h3>
              <div class="iconText">
                  <a href="https://www.linkedin.com/in/marta-zarebska/" target="_blank"><img src="/img/linkedin.svg" alt="LinkedIn"></a>
                  <span class="material-symbols-outlined"> mail</span>
              <p>martazarebska@plshireme.com</p>
              </div>
          </div>
        <p id="madeby">Designed & developed by me 2024</p>
        </div>

        <div class="right">

            <!--Navigation-->
            <div class="column">
              <h5>Navigation</h5>
              <a href="portfolio.html">Home</a>
              <a href="portfolio.html">Work</a>
              <a href="aboutme.html">About me</a>
            </div>

            <div class="column">
              <h5>Work</h5>
              <a href="tcc.html">The Clothing Club</a>
              <a href="smukfest.html">Smukfest</a>
              <a href="ecobites.html">EcoBites</a>
            </div>
        </div>
`;

document.getElementById("finalFooter").innerHTML = Footer;
