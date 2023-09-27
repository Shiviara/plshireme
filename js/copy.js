console.log("Trying to copy email");

//Copy email to clipboard
let text = "martazarebska@plshireme.com";
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
