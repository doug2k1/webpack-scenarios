import leftPad from 'left-pad'

export default (str) => {
  return leftPad(str, 10, '-')
}
