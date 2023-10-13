export const Modal = {
  modal: document.querySelector('[data-modal="modal-wrapper"]'),
  message: document.querySelector('[data-modal="message"]'),
  open() {
    this.modal.classList.add('open');
  },
  
  close() {
    this.modal.classList.remove('open');
    this.message.innerText = "";
  },

  modalMessage(message) {
    this.message.innerText = message;
  }
};

