import refs from './refs';

export function markupCategories(arr) {
  const markup = arr
    .map(
      item => `
<li class="categories__item">
   <button class="categories__btn" type="button">${item}</button>
 </li>
`
    )
    .join('');
  refs.listCategories.innerHTML = markup;
}

export function markupProducts(arr) {
  const markup = arr
    .map(
      ({ id, category, thumbnail, title, brand, price }) => `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
 </li>
`
    )
    .join('');
  refs.listProducts.insertAdjacentHTML('beforeend', markup);
}

export function showLoadMore() {
  refs.loadMore.classList.remove('is-hidden');
}
export function hideLoadMore() {
  refs.loadMore.classList.remove('is-hidden');
}
export function showLoader() {
  refs.loader.classList.add('is-hidden');
}
export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

export function clearList() {
  refs.listProducts.innerHTML = '';
}

export function showNotFound() {
  refs.notFound.classList.add('not-found--visible');
}
export function hideNotFound() {
  refs.notFound.classList.remove('not-found--visible');
}
// export function markupModalProduct({
//   id,
//   category,
//   brand,
//   title,
//   images,
//   price,
//   tags,
//   description,
//   shippingInformation,
//   returnPolicy,
// }) {
//   return `<img class="modal-product__img" src="${images[0]}" alt="${title}" />
//       <div class="modal-product__content">
//         <p class="modal-product__title">${title}</p>
//         <ul class="modal-product__tags">${tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
//         <p class="modal-product__description">${description}</p>
//         <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
//         <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
//         <p class="modal-product__price">Price:${price} $</p>
//         <button class="modal-product__buy-btn" type="button">Buy</button>
//       </div>`;
// }
