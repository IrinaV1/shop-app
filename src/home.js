//Логіка сторінки Home

// import { handleSubmit } from './js/handlers';
// import { currentPage } from './js/constants';
// import {
//   fetchAllProducts,
//   fetchCategories,
//   fetchCategory,
// } from './js/products-api';
// import { refs } from './js/refs';
// import { markupCategories, markupProducts } from './js/render-function';
// // refs.form.addEventListener('submit', handleSubmit);

// try {
//   const data = await fetchCategories();
//   console.log(data);

//   const categories = ['All', ...data];

//   refs.listCategories.insertAdjacentHTML(
//     'beforeend',
//     markupCategories(categories)
//   );
// } catch (error) {
//   alert(error.message);
// }

// try {
//   const data = await fetchAllProducts(currentPage);
//   console.log(data);
//   refs.listProducts.insertAdjacentHTML(
//     'beforeend',
//     markupProducts(data.products)
//   );
// } catch (error) {}

// try {
//   const data = await fetchCategory(value);
//   const value = event.target.textContent;
//   console.log(selectProduct);

//   refs.listProducts.innerHTML = markupProducts(value);
// } catch (error) {}
