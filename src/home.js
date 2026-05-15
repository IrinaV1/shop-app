//Логіка сторінки Home

import {
  filterByCategory,
  handleFormClearBtn,
  handleSubmit,
  initHomePage,
  showModal,
} from './js/handlers';
import { closeModal } from './js/modal';
import refs from './js/refs';
// import { currentPage } from './js/constants';

// import { markupCategories, markupProducts } from './js/render-function';
// import { closeModal } from './js/modal';

document.addEventListener('DOMContentLoaded', initHomePage);
//3. Реалізуй делегування на списку ul.categories
refs.listCategories.addEventListener('click', filterByCategory);

//4. Реалізуй делегування на списку ul.products
refs.listProducts.addEventListener('click', showModal);
refs.modalCloseBtn.addEventListener('click', closeModal);

//5. Пошук товарів за назвою.
refs.form.addEventListener('submit', handleSubmit);
refs.formClearBtn.addEventListener('click', handleFormClearBtn);

//Кошик:
//1. Додавання товарів у кошик.

// refs.modalAddToCart.addEventListener('click', handleAddToCart);
