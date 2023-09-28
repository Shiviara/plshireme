console.log("Looking for a cat");

setTimeout(function () {
  document.getElementById("speechBubble").textContent = "...";
}, 5000);

/*
//Text changes gradually
function changeText() {
  const textToChange = document.getElementById("speechBubble");
  const originalText = textToChange.innerText;
  textToChange.innerText = "...";

  let currentIndex = originalText.length;
  const interval = setInterval(function () {
    currentIndex--;
    textToChange.innerText = originalText.slice(0, currentIndex) + "...";

    if (currentIndex === 0) {
      clearInterval(interval);
    }
  }, 100); // Adjust the interval for the speed of the animation
}

setTimeout(changeText, 2000);
*/
