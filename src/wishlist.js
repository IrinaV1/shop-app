import { fetchProductById } from './js/products-api';

import { markupProducts } from './js/render-function';
import { getLocalStorageWishlist } from './js/storage';

//Логіка сторінки Wishlist

async function renderWishlist() {
  export const savedWishlist = getLocalStorageWishlist();
  try {
    const product = await Promise.all(
      savedWishlist.map(id => fetchProductById(id))
    );
    markupProducts(product);
  } catch (error) {
    console.log(error.message);
  }
}
renderWishlist();
