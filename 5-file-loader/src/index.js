import cow from "./cow";
import "./sass/main.scss";
import icon from "./img/icon.png";

document.querySelector("#box").innerText = cow.say(
  "Webpack can handle all kinds of files!"
);
document.querySelector("#icon").innerHTML = `<img src="${icon}" />`;
