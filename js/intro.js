/*
setTimeout(function () {
  document.getElementById("speechBubble").textContent = "It's so boring.";
}, 5000);*/

setTimeout(function () {
  document.getElementById("speechBubble").textContent = "It's so boring.";

  setTimeout(function () {
    document.getElementById("speechBubble").textContent =
      "Is it seriously a UX/UI portfolio?";

    setTimeout(function () {
      document.getElementById("speechBubble").textContent = "Hey, you!";
      document.getElementById("grumpy").src = "/img/cat/looking.svg";

      setTimeout(function () {
        document.getElementById("speechBubble").textContent =
          "Click that button!";

        setTimeout(function () {
          document.getElementById("speechBubble").textContent =
            "Come on! We don't have all day";
        }, 10000);
      }, 1000);
    }, 3000);
  }, 2000);
}, 4000);
