export default event => {
  if (!event) {
    return
  }
  return event.which || event.keyCode
}
