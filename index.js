import"./assets/styles-JE8YjOlG.js";import{a}from"./assets/vendor-B1ZHW564.js";const n="https://dummyjson.com/products",i=1;async function g(){const{data:t}=await a(`${n}/category-list`);return t}async function l(t=1){const{data:e}=await a(`${n}?limit=12&skip=${(i-1)*12}`);return e}async function m(t){const{data:e}=await a(`${n}/category/${t}`);return e}const r={listCategories:document.querySelector(".categories"),listProducts:document.querySelector(".products"),form:document.querySelector(".search-form")};function f(t){return t.map(e=>`
<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("")}function u(t){return t.map(({id:e,category:o,brand:s,title:c,images:d,price:p})=>`
    <li class="products__item" data-id="${e}">
    <img class="products__image" src="${d[0]}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${s}</span></p>
    <p class="products__category">Category: ${o}</p>
    <p class="products__price">Price: ${p}</p>
 </li>
`).join("")}async function _(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target,o=e.textContent;console.log(o);try{let s;o==="All"?(s=await l(),console.log(s)):s=await m(o);const c=document.querySelector(".not-found");if(!s.products.length){c.classList.add("not-found--visible"),r.listProducts.innerHTML="";return}c.classList.remove("not-found--visible"),r.listProducts.innerHTML=u(s.products),e.classList.add("categories__btn--active")}catch(s){alert(s.message)}}g().then(t=>{console.log(t);const e=["All",...t];r.listCategories.insertAdjacentHTML("beforeend",f(e))}).catch(t=>{alert(t.message)});l(i).then(t=>{console.log(t),r.listProducts.insertAdjacentHTML("beforeend",u(t.products))}).catch(t=>{alert(t.message)});r.listCategories.addEventListener("click",_);
//# sourceMappingURL=index.js.map
