import cowsay from 'cowsay-browser'

export default {
  say (str) {
    return cowsay.say({text: str})
  }
}
