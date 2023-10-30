import *  as elements  from './elements.js'
import { Controls } from './controls.js'
import { Timer } from './timer.js'
import Sound from './sounds.js'

const sound = Sound()

const {
buttonPlay,
buttonPause,
buttonSet,
buttonStop,
buttonSoundOff,
buttonSoundOn,
minutesDisplayTimer,
secondDisplayTimer
} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  secondDisplayTimer,
  minutesDisplayTimer,
  resetControls: controls.reset
})

buttonPlay.addEventListener('click', () => {
  controls.play()
  timer.countDown()
  sound.pressButton()
  sound.bgAudio.play()
  buttonSoundOn.classList.add('hidden')
  buttonSoundOff.classList.remove('hidden')
})

buttonPause.addEventListener('click', () => {
  controls.pause()
  timer.clearTimeoutCountDown()
  sound.pressButton()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.pressButton()
  sound.bgAudio.pause()
  buttonSoundOff.classList.add('hidden')
  buttonSoundOn.classList.remove('hidden')
})

buttonSet.addEventListener('click', () => {
  const newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }
  const minutes = timer.upDateMinutes(newMinutes)
  timer.updateDisplay(minutes, 0)
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hidden')
  buttonSoundOff.classList.remove('hidden')
  sound.bgAudio.play()
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hidden')
  buttonSoundOn.classList.remove('hidden')
  sound.bgAudio.pause()
})
