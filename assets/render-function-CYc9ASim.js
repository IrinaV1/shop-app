import{a as n}from"./vendor-B1ZHW564.js";import{B as g,A as i,P as p,r as o}from"./refs-Bbtwc9UY.js";n.defaults.baseURL=g;async function h(){const{data:s}=await n.get(i.CATEGORIES);return s}async function L(s=1){const t=(s-1)*12,{data:a}=await n.get(`${i.PRODUCTS}?limit=${p}&skip=${t}`);return a}async function y(s,t){const a=(t-1)*12,{data:c}=await n.get(`${i.CATEGORY}${s}?limit=${p}&skip=${a}`);return c}async function k(s){const{data:t}=await n.get(`${i.PRODUCT_BY_ID}${s}`);return t}async function C(s,t=1){const a=(t-1)*12,{data:c}=await n.get(i.SEARCH_PRODUCT,{params:{q:s,limit:p,skip:a}});return c}function M(s){const t=s.map(a=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${a}</button>
 </li>
`).join("");o.listCategories.innerHTML=t}function R(s){const t=s.map(({id:a,category:c,thumbnail:d,title:r,brand:e,price:u})=>`
    <li class="products__item" data-id="${a}">
    <img class="products__image" src="${d}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${e}</span></p>
    <p class="products__category">Category: ${c}</p>
    <p class="products__price">Price: ${u}</p>
 </li>
`).join("");o.listProducts.insertAdjacentHTML("beforeend",t)}function T(){o.loadMore.classList.remove("is-hidden")}function A(){o.loadMore.classList.remove("is-hidden")}function w(){o.loader.classList.add("is-hidden")}function E(){o.loader.classList.add("is-hidden")}function v(){o.listProducts.innerHTML=""}function B(){o.notFound.classList.add("not-found--visible")}function O(){o.notFound.classList.remove("not-found--visible")}function S({id:s,category:t,brand:a,title:c,thumbnail:d,price:r,tags:e,description:u,shippingInformation:l,returnPolicy:_}){const m=e.map($=>`${$}`).join(""),f=`<img class="modal-product__img" src="${d}" alt="${c}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${c}</p>
        <ul class="modal-product__tags">${m}</ul>
        <p class="modal-product__description">${u}</p>
        <p class="modal-product__shipping-information">Shipping: ${l}</p>
        <p class="modal-product__return-policy">Return Policy: ${_}</p>
        <p class="modal-product__price">Price:${r} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;o.modalProduct.innerHTML=f}export{A as a,h as b,M as c,L as d,T as e,k as f,B as g,O as h,E as i,v as j,y as k,S as l,R as m,C as n,w as s};
//# sourceMappingURL=render-function-CYc9ASim.js.map
