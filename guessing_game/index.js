const $formGuessing = document.querySelector('#guessing-form')
const $inputNumber = $formGuessing.querySelector('#number-guessing')
const $screenOne = document.querySelector('#screen-1')
const $screenOneFirstParagraph = $screenOne.querySelector('#label')
const $screenTwo = document.querySelector('#screen-2')
let xAttempts = 0
const MAX_RANDOM_NUMBER = 10
$screenOneFirstParagraph.innerText = `Adivinhe um número entre 0 e ${MAX_RANDOM_NUMBER}`
const generateRandomNumber = () => Math.round(Math.random() * MAX_RANDOM_NUMBER)

const resetGame = () => {
  $screenOne.classList.remove('hide')
  $screenTwo.classList.add('hide')
  xAttempts = 0
  $inputNumber.value = ''
}

const result = nodeList => {
  nodeList.querySelector(
    '#result'
  ).innerText = `Parabéns, você acertou em ${xAttempts} ${
    xAttempts > 1 ? 'tentativas' : 'tentativa'
  }`
  nodeList.querySelector('#btnReset').addEventListener('click', resetGame)
}

const handleClick = e => {
  e.preventDefault()
  xAttempts++
  const randomNumber = generateRandomNumber()

  if (randomNumber === Number($inputNumber.value)) {
    $screenOne.classList.add('hide')
    $screenTwo.classList.remove('hide')
    result($screenTwo)
  }

  $inputNumber.value = ''
}

$formGuessing.addEventListener('submit', handleClick)
