import { currentPage } from './constants';
import { openModal } from './modal';

import {
  fetchAllProducts,
  fetchCategories,
  fetchCategory,
  fetchProductId,
  fetchProductName,
} from './products-api';
import { refs } from './refs';
import {
  markupCategories,
  markupModalProduct,
  markupProducts,
} from './render-function';

//3. Реалізуй делегування на списку ul.categories
export async function handleCategoryClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  const button = event.target;
  const category = button.textContent;

  console.log(category);

  try {
    let data;

    if (category === 'All') {
      data = await fetchAllProducts();
      console.log(data);
    } else {
      data = await fetchCategory(category);
    }

    const notFound = document.querySelector('.not-found');
    if (!data.products.length) {
      // alert('Товарів не знайдено');
      notFound.classList.add('not-found--visible');
      refs.listProducts.innerHTML = '';
      return;
    }
    notFound.classList.remove('not-found--visible');

    refs.listProducts.innerHTML = markupProducts(data.products);

    button.classList.add('categories__btn--active');
  } catch (error) {
    alert(error.message);
  }
}

export async function handleModal(event) {
  const itemCard = event.target.closest('.products__item');
  if (!itemCard) return;
  const itemID = itemCard.dataset.id;

  console.log(itemID);
  try {
    const data = await fetchProductId(itemID);
    console.log(data);
    refs.modalProduct.innerHTML = markupModalProduct(data);
    openModal();
  } catch (error) {
    alert(error.message);
  }
}

//form
export async function handleSubmit(event) {
  event.preventDefault();

  let query = event.target.elements.searchValue.value.trim();
  console.log(query);

  if (!query) {
    refs.notFound.classList.add('not-found--visible');
    refs.listProducts.innerHTML = '';
    return;
  }

  try {
    const data = await fetchProductName(query);
    console.log(data);
    if (data.products.length === 0) {
      refs.listProducts.innerHTML = '';
      refs.notFound.classList.add('not-found--visible');
      return;
    }
    refs.notFound.classList.remove('not-found--visible');

    refs.listProducts.innerHTML = markupProducts(data.products);
  } catch (error) {
    alert(error.message);
  } finally {
    event.target.reset();
  }
}

export async function handleFormClearBtn() {
  refs.form.reset();
  try {
    const data = await fetchAllProducts();

    refs.notFound.classList.remove('not-found--visible');

    refs.listProducts.innerHTML = markupProducts(data.products);
  } catch (error) {
    alert(error.message);
  }
}

//Cart
export function handleAddToCart() {}
