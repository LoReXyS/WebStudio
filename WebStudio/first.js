const btnOpenModal = document.querySelector('.herobutton');
const modal = document.querySelector('.modal');
btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('is-open');
});
const closeButton = document.querySelector('.btn-modal-x');
closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('is-open');
});
