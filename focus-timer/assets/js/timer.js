import Sounds from "./sounds.js"
const sounds = Sounds()
export const Timer = ({
  secondDisplayTimer,
  minutesDisplayTimer,
  resetControls
}) => {
  let countdownTimeout
  let minutes = Number(minutesDisplayTimer.textContent)

  const firstDisplayTimer = [
    Number(minutesDisplayTimer.textContent),
    Number(secondDisplayTimer.textContent)
  ]
  let lastMinutes = null
  const countDownHandler = callback => {
    let seconds = Number(secondDisplayTimer.textContent)
    let minutes = Number(minutesDisplayTimer.textContent)
    let isFinished = minutes === 0 && seconds === 0

    if (isFinished) {
      resetControls()
      sounds.timeEnd()

      if (lastMinutes !== null) {
        updateDisplay(lastMinutes, 0)
        return
      }
      updateDisplay(firstDisplayTimer[0], firstDisplayTimer[1])

      return
    }

    if (seconds === 0) {
      seconds = 60
      --minutes
    }
    updateDisplay(minutes, seconds - 1)
    callback()
  }

  const clearTimeoutCountDown = () => clearTimeout(countdownTimeout)

  const updateDisplay = (minutes, seconds) => {
    minutesDisplayTimer.textContent = String(minutes).padStart(2, '0')
    secondDisplayTimer.textContent = String(seconds).padStart(2, '0')
  }

  const countDown = () => {
    countdownTimeout = setTimeout(() => {
      countDownHandler(countDown)
    }, 1000)
  }

  const reset = () => {
    updateDisplay(minutes, 0)
    clearTimeoutCountDown()
  }
  const upDateMinutes = newMinutes => {
    minutes = newMinutes
    lastMinutes = newMinutes
    return minutes
  }

  return {
    countDown,
    reset,
    updateDisplay,
    clearTimeoutCountDown,
    upDateMinutes
  }
}
