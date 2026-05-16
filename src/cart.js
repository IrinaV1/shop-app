import refs from './js/refs';
import { getLocalStorage } from './js/storage';

//Логіка сторінки Cart
// export function updateCartCount(arr) {
//   if (!arr) return;
//   refs.cartCount.textContent = arr.length;
// }
export const savedCart = getLocalStorage();
