import getKeyCode from './get-key-code'

const handler = fn => function (event) {
  if (!fn.apply(undefined, arguments)) {
    return false
  }
  const options = arguments[2] || arguments[1]
  if (options && options.prevent) {
    event.preventDefault()
  }
  return true
}

export const is = handler((event, code) => getKeyCode(event) === code)

export const isArrowDown = handler(event => is(event, 40))

export const isArrowUp = handler(event => is(event, 38))

export const isEsc = handler(event => is(event, 27))

export const isEnter = handler(event => is(event, 13))

export const isSpace = handler(event => is(event, 32))

export const isSpaceOrEnter = handler(event => isEnter(event) || isSpace(event))

export const isTab = handler(event => is(event, 9))
