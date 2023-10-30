export const Controls = ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
}) => {
  const play = () => {
    buttonPlay.classList.add('hidden')
    buttonPause.classList.remove('hidden')
    buttonSet.classList.add('hidden')
    buttonStop.classList.remove('hidden')
  }

  const pause = () => {
    buttonPause.classList.add('hidden')
    buttonPlay.classList.remove('hidden')
  }
  const reset = () => {
    buttonPlay.classList.remove('hidden')
    buttonPause.classList.add('hidden')
    buttonSet.classList.remove('hidden')
    buttonStop.classList.add('hidden')
  }
  const getMinutes = () => {
    const newMinutes = Number(prompt('Quantos minutos?'))
    if (!newMinutes) {
      return false
    }
    return newMinutes
  }

  return { reset, play, pause, getMinutes }
}
