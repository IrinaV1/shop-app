import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-B1ZHW564.js";const n="https://dummyjson.com/products",i=1,c={listCategories:document.querySelector(".categories"),listProducts:document.querySelector(".products"),form:document.querySelector(".search-form"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")};function f(){c.modal.classList.add("modal--is-open")}function $(){c.modal.classList.remove("modal--is-open")}async function b(){const{data:t}=await r(`${n}/category-list`);return t}async function u(t=1){const{data:o}=await r(`${n}?limit=12&skip=${(i-1)*12}`);return o}async function h(t){const{data:o}=await r(`${n}/category/${t}`);return o}async function P(t){const{data:o}=await r(`${n}/${t}`);return o}function L(t){return t.map(o=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("")}function p(t){return t.map(({id:o,category:s,brand:e,title:a,images:l,price:d})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${l[0]}" alt="${a}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${e}</span></p>
    <p class="products__category">Category: ${s}</p>
    <p class="products__price">Price: ${d}</p>
 </li>
`).join("")}function C({id:t,category:o,brand:s,title:e,images:a,price:l,tags:d,description:m,shippingInformation:_,returnPolicy:g}){return`<img class="modal-product__img" src="${a[0]}" alt="${e}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${e}</p>
        <ul class="modal-product__tags">${d.map(y=>`<li>${y}</li>`).join("")}</ul>
        <p class="modal-product__description">${m}</p>
        <p class="modal-product__shipping-information">Shipping: ${_}</p>
        <p class="modal-product__return-policy">Return Policy: ${g}</p>
        <p class="modal-product__price">Price:${l} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`}async function v(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target,s=o.textContent;console.log(s);try{let e;s==="All"?(e=await u(),console.log(e)):e=await h(s);const a=document.querySelector(".not-found");if(!e.products.length){a.classList.add("not-found--visible"),c.listProducts.innerHTML="";return}a.classList.remove("not-found--visible"),c.listProducts.innerHTML=p(e.products),o.classList.add("categories__btn--active")}catch(e){alert(e.message)}}async function M(t){const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;console.log(s);try{const e=await P(s);console.log(e),c.modalProduct.innerHTML=C(e),f()}catch(e){alert(e.message)}}b().then(t=>{console.log(t);const o=["All",...t];c.listCategories.insertAdjacentHTML("beforeend",L(o))}).catch(t=>{alert(t.message)});u(i).then(t=>{console.log(t),c.listProducts.insertAdjacentHTML("beforeend",p(t.products))}).catch(t=>{alert(t.message)});c.listCategories.addEventListener("click",v);c.listProducts.addEventListener("click",M);c.modalCloseBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
