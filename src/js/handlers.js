import { currentPage } from './constants';
import {
  fetchAllProducts,
  fetchCategories,
  fetchCategory,
} from './products-api';
import { refs } from './refs';
import { markupCategories, markupProducts } from './render-function';

export async function handleSubmit(event) {
  event.preventDefault();
  let query = event.target.elements.searchValue.value.trim();
  console.log(query);

  if (!query) {
    alert('Оберіть категорію');
  }

  try {
    const data = await fetchCategories(query);
    console.log(data);
  } catch (error) {
    alert(error.message);
  } finally {
    event.target.reset();
  }
}
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
