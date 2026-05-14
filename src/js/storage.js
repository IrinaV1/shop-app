import { CART_KEY } from './constants';

export function addLocalStorage(arr) {
  localStorage.setItem(CART_KEY, JSON.stringify(arr));
}
export function removeLocalStorage() {
  localStorage.removeItem(CART_KEY);
}
