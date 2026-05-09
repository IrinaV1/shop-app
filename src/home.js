//Логіка сторінки Home

import { handleCategoryClick, handleSubmit } from './js/handlers';
import { currentPage } from './js/constants';
import {
  fetchAllProducts,
  fetchCategories,
  fetchCategory,
} from './js/products-api';
import { refs } from './js/refs';
import { markupCategories, markupProducts } from './js/render-function';
// refs.form.addEventListener('submit', handleSubmit);

fetchCategories()
  .then(data => {
    console.log(data);
    const categories = ['All', ...data];
    refs.listCategories.insertAdjacentHTML(
      'beforeend',
      markupCategories(categories)
    );
  })
  .catch(error => {
    alert(error.message);
  });

fetchAllProducts(currentPage)
  .then(data => {
    console.log(data);
    refs.listProducts.insertAdjacentHTML(
      'beforeend',
      markupProducts(data.products)
    );
  })
  .catch(error => {
    alert(error.message);
  });
//3. Реалізуй делегування на списку ul.categories
refs.listCategories.addEventListener('click', handleCategoryClick);
