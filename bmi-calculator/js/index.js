import { Modal } from './modal.js'
const $form = document.querySelector('[data-form="form"]')
const $inputWeight = $form.querySelector('[data-form="input-weight"]')
const $inputHeight = $form.querySelector('[data-form="input-height"]')
const $buttonClose = document.querySelector('[data-modal="close"]')
const imc = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(2)
}

const handleSubmit = event => {
  event.preventDefault()
  const weight = Number($inputWeight.value)
  const height = Number($inputHeight.value)
  const message = `Seu IMC é ${imc(weight, height)}`
  Modal.open()
  Modal.modalMessage(message)
  
}
 
$form.onsubmit = handleSubmit;

$buttonClose.onclick = () => Modal.close();

window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    Modal.close();
  }
});

