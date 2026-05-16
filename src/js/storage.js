import { CART_KEY, WISHLIST_KEY } from './constants';

export function addLocalStorage(arr) {
  localStorage.setItem(CART_KEY, JSON.stringify(arr));
}
export function removeLocalStorage() {
  localStorage.removeItem(CART_KEY);
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function addLocalStorageWishlist(arr) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(arr));
}
export function removeLocalStorageWishlist() {
  localStorage.removeItem(WISHLIST_KEY);
}

export function getLocalStorageWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}
