console.log("Looking for a cat");
/*
setTimeout(function () {
  document.getElementById("speechBubble").textContent = "It's so boring.";
}, 5000);*/

setTimeout(function () {
  document.getElementById("speechBubble").textContent = "It's so boring.";

  setTimeout(function () {
    document.getElementById("speechBubble").textContent = "...";

    setTimeout(function () {
      document.getElementById("speechBubble").textContent = "Hey, you!";

      setTimeout(function () {
        document.getElementById("speechBubble").textContent =
          "Click this button!";
      }, 1000);
    }, 3000);
  }, 2000);
}, 4000);
