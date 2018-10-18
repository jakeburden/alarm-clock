function clock (state, cb) {
  window.requestAnimationFrame(tick)

  function tick () {
    const date = new Date()
    state.seconds = date.getSeconds()
    state.minutes = date.getMinutes()
    state.hours = date.getHours()
    state.day = date.getDay()
    cb(state)
    clock(state, cb)
  }
}

module.exports = clock
