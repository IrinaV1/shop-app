export function markupCategories(arr) {
  return arr
    .map(
      item => `
<li class="categories__item">
   <button class="categories__btn" type="button">${item}</button>
 </li>
`
    )
    .join('');
}

export function markupProducts(arr) {
  return arr
    .map(
      ({ id, category, brand, title, images, price }) => `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${images[0]}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
 </li>
`
    )
    .join('');
}

export function markupModalProduct(arr) {
  return arr.map(
    item =>
      `<img class="modal-product__img" src="" alt="" />
      <div class="modal-product__content">
        <p class="modal-product__title"></p>
        <ul class="modal-product__tags"></ul>
        <p class="modal-product__description"></p>
        <p class="modal-product__shipping-information">Shipping:</p>
        <p class="modal-product__return-policy">Return Policy:</p>
        <p class="modal-product__price">Price: $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`
  );
}
