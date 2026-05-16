// import { updateCartCount } from '../cart';
// import { updateWishlistCount } from '../wishlist';
import { arrIdCart, arrIdWishlist, CART_KEY, PER_PAGE } from './constants';
import { openModal } from './modal';

import {
  fetchAllProducts,
  fetchCategories,
  fetchCategory,
  fetchProductById,
  fetchProductName,
} from './products-api';
import refs from './refs';

import {
  clearList,
  hideLoader,
  hideLoadMore,
  hideNotFound,
  markupCategories,
  markupModalProduct,
  markupProducts,
  showLoader,
  showLoadMore,
  showNotFound,
} from './render-function';
import {
  addLocalStorage,
  addLocalStorageWishlist,
  getLocalStorage,
  getLocalStorageWishlist,
  removeLocalStorage,
} from './storage';

let currentPage = 1;
export const savedCart = getLocalStorage();
export const savedWishlist = getLocalStorageWishlist();
//3. Реалізуй делегування на списку ul.categories
export async function initHomePage() {
  try {
    hideNotFound();
    hideLoadMore();
    showLoader();
    const category = await fetchCategories();
    console.log(category);
    const categories = ['All', ...category];
    markupCategories(categories);
    document
      .querySelector('.categories__btn')
      .classList.add('categories__btn--active');
    const { products, total, skip } = await fetchAllProducts(currentPage);
    if (products.length > 0) {
      markupProducts(products);
      if (total - skip - PER_PAGE > 0) {
        showLoadMore();
      }
    } else {
      showNotFound();
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

export async function filterByCategory(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const category = event.target.textContent;
  document.querySelectorAll('.categories__btn').forEach(item => {
    item.classList.remove('categories__btn--active');
  });
  event.target.classList.add('categories__btn--active');

  try {
    hideNotFound();
    hideLoadMore();
    showLoader();
    clearList();

    console.log(category);
    currentPage = 1;
    let data;
    const { products, total, skip } =
      category === 'All'
        ? await fetchAllProducts(currentPage)
        : await fetchCategory(category, currentPage);

    if (products.length > 0) {
      markupProducts(products);
      if (total - skip - PER_PAGE > 0) {
        showLoadMore();
      }
    } else {
      showNotFound();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
}

export async function showModal(event) {
  if (event.target.parentElement.nodeName !== 'LI') return;
  let id = event.target.parentElement.dataset.id;
  try {
    const data = await fetchProductById(id);
    console.log(data);
    if (data) {
      refs.modal.dataset.id = id;
      if (arrIdCart.includes(+id)) {
        refs.modalAddToCart.textContent = 'Remove from Cart';
      } else {
        refs.modalAddToCart.textContent = 'Add to Cart';
      }
      if (arrIdWishlist.includes(+id)) {
        refs.modalWishlistCart.textContent = 'Remove from Wishlist';
      } else {
        refs.modalWishlistCart.textContent = 'Add to Wishlist';
      }
      openModal();
      markupModalProduct(data);
    }
  } catch (error) {
    alert(error.message);
  }
}

// //form
export async function handleSubmit(event) {
  event.preventDefault();
  refs.listProducts.innerHTML = '';
  const query = event.target.elements.searchValue.value.trim();
  console.log(query);

  if (!query) {
    showNotFound();
    return;
  }

  try {
    const data = await fetchProductName(query, (currentPage = 1));
    console.log(data);
    if (data.products.length === 0) {
      showNotFound();
      return;
    }
    hideNotFound();
    markupProducts(data.products);
  } catch (error) {
    alert(error.message);
  } finally {
    event.target.reset();
  }
}

export async function handleFormClearBtn() {
  refs.form.reset();
  refs.listProducts.innerHTML = '';
  try {
    const data = await fetchAllProducts();
    markupProducts(data.products);
  } catch (error) {
    alert(error.message);
  }
}

// //Кошик:
//1. Додавання товарів у кошик.
export function handleAddToCart(event) {
  const idCart = Number(refs.modal.dataset.id);
  console.log(idCart);
  if (arrIdCart.includes(idCart)) {
    const indexId = arrIdCart.indexOf(idCart);
    arrIdCart.splice(indexId, 1);
    refs.modalAddToCart.textContent = 'Add to Cart';
    // removeLocalStorage();
  } else {
    arrIdCart.push(idCart);
    refs.modalAddToCart.textContent = 'Remove from Cart';
  }

  addLocalStorage(arrIdCart);
  updateCartCount(arrIdCart);
  console.log(arrIdCart);
}
//Wishlist
//1. Додавання товарів у Wishlist.
export function handleWishlistCart(event) {
  const idCart = Number(refs.modal.dataset.id);
  console.log(idCart);
  if (arrIdWishlist.includes(idCart)) {
    const indexId = arrIdWishlist.indexOf(idCart);
    arrIdWishlist.splice(indexId, 1);
    refs.modalWishlistCart.textContent = 'Add to Wishlist';
    // removeLocalStorage();
  } else {
    arrIdWishlist.push(idCart);
    refs.modalWishlistCart.textContent = 'Remove from Wishlist';
  }

  addLocalStorageWishlist(arrIdWishlist);
  updateWishlistCount(arrIdWishlist);
  console.log(arrIdWishlist);
}
export function updateWishlistCount(arr) {
  if (!arr) return;
  refs.wishlistCount.textContent = arr.length;
}
export function updateCartCount(arr) {
  if (!arr) return;
  refs.cartCount.textContent = arr.length;
}
