const buttonPlay = document.querySelector('[data-controls="play"]')
const buttonPause = document.querySelector('[data-controls="pause"]')
const buttonSet = document.querySelector('[data-controls="set"]')
const buttonStop = document.querySelector('[data-controls="stop"]')
const buttonSoundOff = document.querySelector('[data-sounds="soundOff"]')
const buttonSoundOn = document.querySelector('[data-sounds="soundOn"]')

const minutesDisplayTimer = document.querySelector('[data-timer="minutes"]')
const secondDisplayTimer = document.querySelector('[data-timer="seconds"]')

export {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplayTimer,
  secondDisplayTimer
}
