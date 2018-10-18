function enableAlarmSetting (ui, state) {
  ui.alarmSubmit().addEventListener('click', (e) => {
    const form = e.currentTarget.parentNode
    let hour = form.querySelector('.input__hour').value
    const minute = Number(form.querySelector('.input__minute').value)
    const pm = form.querySelector('#pm_input').checked
    if (pm) hour += 12
    state.alarms.push({
      hour: +hour,
      minute: +minute
    })

    form.parentNode.innerHTML = `<p>${hour} : ${(minute < 10 && minute > 0) ? '0' + String(minute) : minute} ${pm ? 'pm' : 'am'}`
    document.querySelector('.alarms').innerHTML += `
      <li class="alarm">
        <form class="alarm__inputs">
          <input class="input__time input__hour" type='number' placeholder="12"/>
          <input class="input__time input__minute" type='number' placeholder="00"/>
          <div class="input__time input__am_pm">
            <input type='radio' name='am_pm_input' id='am_input' checked />
            <label class='input__label input__label--am' for="am_input">am</label>
            <input type='radio' name='am_pm_input' id='pm_input' />
            <label class='input__label input__label--pm' for="pm_input">pm</label>
          </div>
          <span id='submit' class="right-arrow">→</span>
        </form>
      </li>
    `

    enableAlarmSetting(ui, state)
  })
}

module.exports = enableAlarmSetting
