import { arrIdWishlist } from './js/constants';
import { fetchProductById } from './js/products-api';
import refs from './js/refs';
import { markupProducts } from './js/render-function';
import { getLocalStorageWishlist } from './js/storage';

//Логіка сторінки Wishlist
// export function updateWishlistCount(arr) {
//   if (!arr) return;
//   refs.wishlistCount.textContent = arr.length;
// }

export const savedWishlist = getLocalStorageWishlist();
console.log(savedWishlist.length);
try {
  const product = await Promise.all(
    savedWishlist.map(id => fetchProductById(id))
  );
  markupProducts(product);
} catch (error) {
  console.log(error.message);
}
