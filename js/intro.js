console.log("Looking for a cat");
/*
setTimeout(function () {
  document.getElementById("speechBubble").textContent = "It's so boring.";
}, 5000);*/

setTimeout(function () {
  document.getElementById("speechBubble").textContent = "It's so boring.";

  setTimeout(function () {
    document.getElementById("speechBubble").textContent = "I mean really?";

    setTimeout(function () {
      document.getElementById("speechBubble").textContent = "Hey, you!";
      document.getElementById("grumpy").src = "/img/cat/looking.svg";

      setTimeout(function () {
        document.getElementById("speechBubble").textContent =
          "Click that button!";
      }, 1000);
    }, 3000);
  }, 2000);
}, 4000);
