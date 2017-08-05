import { say } from 'cowsay-browser'

export const cow = (text) => {
  console.log(say({ text }))
}
