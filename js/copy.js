//Copy email to clipboard
let text = "martazarebska@plshireme.com";
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
    document.getElementById("feedback").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("feedback").style.opacity = "0";
    }, 3000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
