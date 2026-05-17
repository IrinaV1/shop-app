import { arrIdCart, arrIdWishlist } from './js/constants';
import {
  handleAddToCart,
  handleWishlistCart,
  showModal,
  updateCartCount,
  updateWishlistCount,
} from './js/handlers';
import { closeModal } from './js/modal';
import { fetchProductById } from './js/products-api';
import refs from './js/refs';
import { markupProducts } from './js/render-function';
import { getLocalStorage, getLocalStorageWishlist } from './js/storage';

//Логіка сторінки Cart

export async function renderCart() {
  const savedCart = getLocalStorage();
  // if (savedCard.length === 0) return;
  console.log(typeof savedCart);

  const filteredCart = savedCart.filter(id => id);
  try {
    console.log(savedCart);
    const products = await Promise.all(
      filteredCart.map(id => {
        return fetchProductById(id);
      })
    );

    markupProducts(products);
    refs.cartItems.textContent = savedCart.length;
    const total = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
    refs.cartTotal.textContent = total;
  } catch (error) {
    console.log(error.message);
  }
}
renderCart();

arrIdCart.push(...getLocalStorage());
updateCartCount(arrIdCart);
arrIdWishlist.push(...getLocalStorageWishlist());
updateWishlistCount(arrIdWishlist);

refs.listProducts.addEventListener('click', showModal);
refs.modalCloseBtn.addEventListener('click', closeModal);
refs.modalWishlistCart.addEventListener('click', handleWishlistCart);
refs.modalAddToCart.addEventListener('click', handleAddToCart);
