import { arrIdCart, arrIdWishlist } from './js/constants';
import {
  handleAddToCart,
  handleWishlistCart,
  showModal,
  updateCartCount,
  updateWishlistCount,
} from './js/handlers';
import { closeModal, openModal } from './js/modal';
import { fetchProductById } from './js/products-api';
import refs from './js/refs';

import { markupProducts } from './js/render-function';
import { getLocalStorage, getLocalStorageWishlist } from './js/storage';

//Логіка сторінки Wishlist

export async function renderWishlist() {
  const savedWishlist = getLocalStorageWishlist();
  const filteredWishlist = savedWishlist.filter(id => id);
  try {
    console.log(savedWishlist);
    const product = await Promise.all(
      filteredWishlist.map(id => {
        return fetchProductById(id);
      })
    );

    markupProducts(product);
  } catch (error) {
    console.log(error.message);
  }
}
renderWishlist();
arrIdCart.push(...getLocalStorage());
updateCartCount(arrIdCart);
arrIdWishlist.push(...getLocalStorageWishlist());
updateWishlistCount(arrIdWishlist);

refs.listProducts.addEventListener('click', showModal);
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modalWishlistCart.addEventListener('click', handleWishlistCart);
refs.modalAddToCart.addEventListener('click', handleAddToCart);
