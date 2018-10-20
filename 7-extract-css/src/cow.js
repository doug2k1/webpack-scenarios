import cowsay from "cowsay-browser";
import "./sass/cow.scss";

export default {
  say(str) {
    return cowsay.say({ text: str });
  }
};
