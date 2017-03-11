const getKeyCode = require('./get-key-code')

exports.is = handler((event, code) => {
  return getKeyCode(event) === code
})

exports.isArrowDown = handler(event => {
  return exports.is(event, 40)
})

exports.isArrowUp = handler(event => {
  return exports.is(event, 38)
})

exports.isEsc = handler(event => {
  return exports.is(event, 27)
})

exports.isEnter = handler(event => {
  return exports.is(event, 13)
})

exports.isSpace = handler(event => {
  return exports.is(event, 32)
})

exports.isSpaceOrEnter = handler(event => {
  return exports.isEnter(event) || exports.isSpace(event)
})

exports.isTab = handler(event => {
  return exports.is(event, 9)
})

function handler (fn) {
  return function (event) {
    if (!fn.apply(undefined, arguments)) {
      return false
    }
    const options = arguments[2] || arguments[1]
    if (options && options.prevent) {
      event.preventDefault()
    }
    return true
  }
}
