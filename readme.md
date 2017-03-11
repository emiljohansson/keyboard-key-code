# keyboard-key-code

> Helper methods for dealing with key codes in keyboard events.

## Install

```sh
npm i git+https://github.com/emiljohansson/keyboard-key-code --save
```

## Usage

```js
import * as keyCode from 'keyboard-key-code'
keyCode.isTab({
  which: 9
})
// => true
```

## API

### is(event, code)

### isArrowDown(event)

### isArrowUp(event)

### isEsc(event)

### isEnter(event)

### isSpace(event)

### isSpaceOrEnter(event)

### isTab(event)

## License

MIT © [Emil Johansson](http://emiljohansson.se)
