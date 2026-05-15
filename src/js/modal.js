import refs from './refs';

export function openModal() {
  refs.modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscapeKeydown);
  refs.modal.addEventListener('click', onBackDrop);
}
export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscapeKeydown);
  refs.modal.removeEventListener('click', onBackDrop);
}

function onEscapeKeydown(event) {
  if (event.code === 'Escape') closeModal();
}

function onBackDrop(event) {
  if (event.target === event.currentTarget) closeModal();
  console.log(event.target);
}
