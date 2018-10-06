import cow from "./cow";

const message = "is great";
document.querySelector("#box").innerText = cow.say(
  `Webpack with Babel ${message}!`
);
