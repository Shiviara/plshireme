//Last cta section
const LastCTA = `
    <img src="/img/greenWaveTop.svg" class="waves">
        <h3>Do you have an idea brewing? </h3>
        <p>Let's talk about it over some tea</p>
        <p id="feedback">📬 My email is now copied to your clipboard ;)</p>
        <button class="secondary-cta" onclick="copyContent()">
          Email me
        </button>
        <img src="/img/greenWaveBottom.svg" class="waves">
`;

document.getElementById("lastcta").innerHTML = LastCTA;
