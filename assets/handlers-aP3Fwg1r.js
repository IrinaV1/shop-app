import{a as c}from"./vendor-B1ZHW564.js";const n="https://dummyjson.com/products",g=1,e={listCategories:document.querySelector(".categories"),listProducts:document.querySelector(".products"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn"),form:document.querySelector(".search-form"),formClearBtn:document.querySelector(".search-form__btn-clear"),notFound:document.querySelector(".not-found"),modalAddToCart:document.querySelector(".modal-product__btn--cart")};function y(){e.modal.classList.add("modal--is-open")}function C(){e.modal.classList.remove("modal--is-open")}async function S(){const{data:t}=await c(`${n}/category-list`);return t}async function u(t=1){const{data:o}=await c(`${n}?limit=12&skip=${(g-1)*12}`);return o}async function b(t){const{data:o}=await c(`${n}/category/${t}`);return o}async function $(t){const{data:o}=await c(`${n}/${t}`);return o}async function h(t,o=1){const{data:a}=await c(`${n}/search`,{params:{q:t,limit:12,skip:(o-1)*12}});return a}function q(t){return t.map(o=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>
`).join("")}function i(t){return t.map(({id:o,category:a,brand:s,title:r,images:l,price:d})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${l[0]}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${s}</span></p>
    <p class="products__category">Category: ${a}</p>
    <p class="products__price">Price: ${d}</p>
 </li>
`).join("")}function P({id:t,category:o,brand:a,title:s,images:r,price:l,tags:d,description:m,shippingInformation:p,returnPolicy:_}){return`<img class="modal-product__img" src="${r[0]}" alt="${s}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${s}</p>
        <ul class="modal-product__tags">${d.map(f=>`<li>${f}</li>`).join("")}</ul>
        <p class="modal-product__description">${m}</p>
        <p class="modal-product__shipping-information">Shipping: ${p}</p>
        <p class="modal-product__return-policy">Return Policy: ${_}</p>
        <p class="modal-product__price">Price:${l} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`}async function v(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target,a=o.textContent;console.log(a);try{let s;a==="All"?(s=await u(),console.log(s)):s=await b(a);const r=document.querySelector(".not-found");if(!s.products.length){r.classList.add("not-found--visible"),e.listProducts.innerHTML="";return}r.classList.remove("not-found--visible"),e.listProducts.innerHTML=i(s.products),o.classList.add("categories__btn--active")}catch(s){alert(s.message)}}async function M(t){const o=t.target.closest(".products__item");if(!o)return;const a=o.dataset.id;console.log(a);try{const s=await $(a);console.log(s),e.modalProduct.innerHTML=P(s),y()}catch(s){alert(s.message)}}async function T(t){t.preventDefault();let o=t.target.elements.searchValue.value.trim();if(console.log(o),!o){e.notFound.classList.add("not-found--visible"),e.listProducts.innerHTML="";return}try{const a=await h(o);if(console.log(a),a.products.length===0){e.listProducts.innerHTML="",e.notFound.classList.add("not-found--visible");return}e.notFound.classList.remove("not-found--visible"),e.listProducts.innerHTML=i(a.products)}catch(a){alert(a.message)}finally{t.target.reset()}}async function w(){e.form.reset();try{const t=await u();e.notFound.classList.remove("not-found--visible"),e.listProducts.innerHTML=i(t.products)}catch(t){alert(t.message)}}function B(){}export{u as a,i as b,M as c,C as d,T as e,S as f,w as g,v as h,g as i,B as j,q as m,e as r};
//# sourceMappingURL=handlers-aP3Fwg1r.js.map
