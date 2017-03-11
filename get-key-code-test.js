import test from 'ava'
import getKeyCode from './get-key-code'

test('return undefined', t => {
  let expected
  let actual = getKeyCode()
  t.is(actual, expected)
  actual = getKeyCode({})
  t.is(actual, expected)
})

test('return `event.which`', t => {
  const expected = 13
  const actual = getKeyCode({
    which: expected
  })
  t.is(actual, expected)
})

test('return `event.keyCode`', t => {
  const expected = 32
  const actual = getKeyCode({
    keyCode: expected
  })
  t.is(actual, expected)
})
