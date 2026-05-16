//Логіка сторінки Home

import { arrIdCart, arrIdWishlist } from './js/constants';
import {
  filterByCategory,
  handleAddToCart,
  handleFormClearBtn,
  handleSubmit,
  handleWishlistCart,
  initHomePage,
  savedCart,
  savedWishlist,
  showModal,
  updateCartCount,
  updateWishlistCount,
} from './js/handlers';
import { closeModal } from './js/modal';
import refs from './js/refs';

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

refs.modalAddToCart.addEventListener('click', handleAddToCart);
arrIdCart.push(...savedCart);
updateCartCount(arrIdCart);

//Wishlist
//1. Додавання товарів у Wishlist.
refs.modalWishlistCart.addEventListener('click', handleWishlistCart);

arrIdWishlist.push(...savedWishlist);
updateWishlistCount(arrIdWishlist);

//Сторінка Wishlist (список бажань)
