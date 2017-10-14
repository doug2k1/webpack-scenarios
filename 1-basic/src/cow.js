var cowsay = require('cowsay-browser')

module.exports = {
  say: function(str) {
    return cowsay.say({ text: str })
  }
}
