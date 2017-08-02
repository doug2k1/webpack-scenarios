var leftPad = require('left-pad')

module.exports = function pad(str) {
  return leftPad(str, 10, '-')
}
