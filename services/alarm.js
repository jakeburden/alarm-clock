class Alarm {
  constructor (state) {
    this.state = state
    this.alarms = state.alarms
  }

  checkTime () {
    if (this.buzzing) return
    this.alarms.forEach(alarm => {
      const clock = this.state
      if (alarm.hour !== clock.hours) return
      if (alarm.minute !== clock.minutes) return
      if (clock.seconds !== 0) return

      window.alert("It's time!")
    })
  }
}

module.exports = Alarm
