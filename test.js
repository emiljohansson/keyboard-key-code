import test from 'ava'
import * as sinon from 'sinon'
import * as keyCode from './'

test('is() should return true', t => {
  const expected = true
  t.is(keyCode.is({
    which: 15
  }, 15), expected)
  t.is(keyCode.is({
    keyCode: 16
  }, 16), expected)
})

test('is() should return false', t => {
  const expected = false
  t.is(keyCode.is({
    which: 15
  }, 20), expected)
  t.is(keyCode.is({
    keyCode: 16
  }, 21), expected)
})

test('is() should preventDefault', t => {
  const callback = sinon.spy()
  keyCode.is({
    which: 13,
    preventDefault: callback
  }, 13, {
    prevent: true
  })
  const actual = callback.called
  const expected = true
  t.is(actual, expected)
})

test('isArrowDown() should return true', t => {
  const expected = true
  t.is(keyCode.isArrowDown({
    which: 40
  }), expected)
})

test('isArrowDown() should return false', t => {
  const expected = false
  t.is(keyCode.isArrowDown({
    which: 15
  }), expected)
})

test('isArrowUp() should return true', t => {
  const expected = true
  t.is(keyCode.isArrowUp({
    which: 38
  }), expected)
})

test('isArrowUp() should return false', t => {
  const expected = false
  t.is(keyCode.isArrowUp({
    which: 15
  }), expected)
})

test('isEsc() should return true', t => {
  const expected = true
  t.is(keyCode.isEsc({
    which: 27
  }), expected)
})

test('isEsc() should return false', t => {
  const expected = false
  t.is(keyCode.isEsc({
    which: 15
  }), expected)
})

test('isEnter() should return true', t => {
  const expected = true
  t.is(keyCode.isEnter({
    which: 13
  }), expected)
})

test('isEnter() should return false', t => {
  const expected = false
  t.is(keyCode.isEnter({
    which: 15
  }), expected)
})

test('isSpace() should return true', t => {
  const expected = true
  t.is(keyCode.isSpace({
    which: 32
  }), expected)
})

test('isSpace() should return false', t => {
  const expected = false
  t.is(keyCode.isSpace({
    which: 15
  }), expected)
})

test('isSpaceOrEnter() should return true', t => {
  const expected = true
  t.is(keyCode.isSpaceOrEnter({
    which: 13
  }), expected)
  t.is(keyCode.isSpaceOrEnter({
    which: 32
  }), expected)
  t.is(keyCode.isSpaceOrEnter({
    keyCode: 13
  }), expected)
  t.is(keyCode.isSpaceOrEnter({
    keyCode: 32
  }), expected)
})

test('isSpaceOrEnter() should return false', t => {
  const expected = false
  t.is(keyCode.isSpaceOrEnter({
    which: 14
  }), expected)
  t.is(keyCode.isSpaceOrEnter({
    keyCode: 30
  }), expected)
})

test('isSpaceOrEnter() should preventDefault', t => {
  const callback = sinon.spy()
  keyCode.isSpaceOrEnter({
    which: 13,
    preventDefault: callback
  }, {
    prevent: true
  })
  const actual = callback.called
  const expected = true
  t.is(actual, expected)
})

test('isSpaceOrEnter() should not preventDefault', t => {
  const callback = sinon.spy()
  keyCode.isSpaceOrEnter({
    which: 13,
    preventDefault: callback
  })
  const actual = callback.called
  const expected = false
  t.is(actual, expected)
})

test('isTab() should return true', t => {
  const expected = true
  t.is(keyCode.isTab({
    which: 9
  }), expected)
})

test('isTab() should return false', t => {
  const expected = false
  t.is(keyCode.isTab({
    which: 15
  }), expected)
})
