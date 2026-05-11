import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-B1ZHW564.js";const n="https://dummyjson.com/products",p=1,m=[],e={listCategories:document.querySelector(".categories"),listProducts:document.querySelector(".products"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),form:document.querySelector(".search-form"),formClearBtn:document.querySelector(".search-form__btn-clear"),notFound:document.querySelector(".not-found"),modalAddToCart:document.querySelector(".modal-product__btn--cart"),modalWishlistCart:document.querySelector(".modal-product__btn--wishlist")};function b(){e.modal.classList.add("modal--is-open")}function h(){e.modal.classList.remove("modal--is-open")}async function $(){const{data:t}=await c(`${n}/category-list`);return t}async function u(t=1){const{data:o}=await c(`${n}?limit=12&skip=${(p-1)*12}`);return o}async function L(t){const{data:o}=await c(`${n}/category/${t}`);return o}async function C(t){const{data:o}=await c(`${n}/${t}`);return o}async function P(t,o=1){const{data:a}=await c(`${n}/search`,{params:{q:t,limit:12,skip:(o-1)*12}});return a}function v(t){return t.map(o=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("")}function l(t){return t.map(({id:o,category:a,brand:s,title:r,images:d,price:i})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${d[0]}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${s}</span></p>
    <p class="products__category">Category: ${a}</p>
    <p class="products__price">Price: ${i}</p>
 </li>
`).join("")}function S({id:t,category:o,brand:a,title:s,images:r,price:d,tags:i,description:g,shippingInformation:_,returnPolicy:f}){return`<img class="modal-product__img" src="${r[0]}" alt="${s}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${s}</p>
        <ul class="modal-product__tags">${i.map(y=>`<li>${y}</li>`).join("")}</ul>
        <p class="modal-product__description">${g}</p>
        <p class="modal-product__shipping-information">Shipping: ${_}</p>
        <p class="modal-product__return-policy">Return Policy: ${f}</p>
        <p class="modal-product__price">Price:${d} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`}async function T(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target,a=o.textContent;console.log(a);try{let s;a==="All"?(s=await u(),console.log(s)):s=await L(a);const r=document.querySelector(".not-found");if(!s.products.length){r.classList.add("not-found--visible"),e.listProducts.innerHTML="";return}r.classList.remove("not-found--visible"),e.listProducts.innerHTML=l(s.products),o.classList.add("categories__btn--active")}catch(s){alert(s.message)}}async function q(t){const o=t.target.closest(".products__item");if(!o)return;const a=o.dataset.id;console.log(a);try{const s=await C(a);console.log(s),e.modalProduct.innerHTML=S(s),e.modal.dataset.id=a,b()}catch(s){alert(s.message)}}async function M(t){t.preventDefault();let o=t.target.elements.searchValue.value.trim();if(console.log(o),!o){e.notFound.classList.add("not-found--visible"),e.listProducts.innerHTML="";return}try{const a=await P(o);if(console.log(a),a.products.length===0){e.listProducts.innerHTML="",e.notFound.classList.add("not-found--visible");return}e.notFound.classList.remove("not-found--visible"),e.listProducts.innerHTML=l(a.products)}catch(a){alert(a.message)}finally{t.target.reset()}}async function k(){e.form.reset();try{const t=await u();e.notFound.classList.remove("not-found--visible"),e.listProducts.innerHTML=l(t.products)}catch(t){alert(t.message)}}function w(t){let o=t.target;console.log(o);const a=e.modal.dataset.id;m.push(a),console.log(m),console.log(a)}$().then(t=>{console.log(t);const o=["All",...t];e.listCategories.insertAdjacentHTML("beforeend",v(o))}).catch(t=>{alert(t.message)});u(p).then(t=>{console.log(t),e.listProducts.insertAdjacentHTML("beforeend",l(t.products))}).catch(t=>{alert(t.message)});e.listCategories.addEventListener("click",T);e.listProducts.addEventListener("click",q);e.modalCloseBtn.addEventListener("click",h);e.form.addEventListener("submit",M);e.formClearBtn.addEventListener("click",k);e.modalAddToCart.addEventListener("click",w);
//# sourceMappingURL=index.js.map
