module.exports = event => {
  if (!event) {
    return
  }
  return event.which || event.keyCode
}
