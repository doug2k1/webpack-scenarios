import cow from "./cow";
import "./css/main.css";

const message = "is awesome";
document.querySelector("#box").innerText = cow.say(
  `Webpack with Babel and CSS ${message}!`
);
