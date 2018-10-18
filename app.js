const clock = require('./services/clock')
const Alarm = require('./services/alarm')
const enableAlarmSetting = require('./client/enableAlarmSettings')

const ui = require('./client/ui')

const state = {
  alarms: []
}

const alarm = new Alarm(state)

clock(state, state => window.requestAnimationFrame(onTick(state)))

enableAlarmSetting(ui, state)

function onTick (state) {
  const time = state
  return function () {
    const pm = time.hours >= 12
    let hours = pm ? time.hours - 12 : time.hours
    if (hours === 0) hours = 12
    const minutes = time.minutes < 10 ? '0' + String(time.minutes) : time.minutes
    const seconds = time.seconds < 10 ? '0' + String(time.seconds) : time.seconds
    ui.clock.textContent = `${hours} : ${minutes} : ${seconds}`
    ui.am_pm.textContent = `${pm ? 'pm' : 'am'}`
    alarm.checkTime()
  }
}
