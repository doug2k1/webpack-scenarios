var cowsay = require('cowsay-browser')

module.exports = {
  cow: function(str) {
    console.log(cowsay.say({ text: str }))
  }
}
