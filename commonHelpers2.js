import{i as c,a as g,T as n,g as h}from"./assets/switch-button-3181180d.js";import"./assets/vendor-f87d3a68.js";const d="/js_98_evgeniy-popov-98/assets/IMG_9606-a8e7c57b.png",u="/js_98_evgeniy-popov-98/assets/amazon-2651c11a.svg",m="/js_98_evgeniy-popov-98/assets/book-5e54f05d.svg",f="/js_98_evgeniy-popov-98/assets/trash-121ef440.svg",o=document.querySelector(".shoppinglist-shoppinglist");function v(){const t=o.querySelector(".shoppinglist-text");if(t)return t;const s=document.createElement("h1");return s.classList.add("shoppinglist-text"),s.innerHTML=`
        <span class="shoppinglist-text1">Shopping</span>
        List
    `,s}o.appendChild(v());const l=`
<h1 class="shoppinglist-text">Shopping
	<span class="shoppinglist-text1">List</span>
</h1>
<div class="shoppinglist-blocks">
    <h2 class="text">This page is empty, add some books and proceed to order.</h2>
    <img src="${d}" alt="Shopping Image" class="shoppinglist-img96061">
</div>
`;async function y(){try{const t=c(n);if(!t||!t.length){o.innerHTML=l;return}let s="";for(const e of t){const i=await h(e.constID);s+=k(i,e)}o.innerHTML+=s}catch(t){console.error("Error fetching book data:",t)}}function k(t,s){const e=document.querySelector(".loader-shopping");e.style.display="none";const i=t.description?t.description:"With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.";return`
<div class="container-block" id="${s.constID}">    
    <img src="${t.book_image}" alt="${t.title}" class="book-image">
    <div class="text-area">
        <h2 class="shopping-list-title">${t.title}</h2>
        <h2 class="shopping-list-title-name">${t.list_name}</h2>
        <p class="shopping-list-description">${i}</p>
        <h2 class="shopping-list-author">${t.author}</h2>
    </div>
        <button class="trash-btn"><img src="${f}" alt=""></button>
        <ul class="links">
            <li><a target="_blank" href="${t.buy_links[0].url}"><img src="${u}" class="amazon"></a></li>
            <li><a target="_blank" href="${t.buy_links[1].url}"><img src="${m}"  class="apple-book"></a></li>
        </ul>
</div>
  `}o.addEventListener("click",function(t){const s=t.target;if(t.target.parentNode.nodeName==="BUTTON"||t.target.nodeName==="BUTTON"){const e=s.closest(".container-block"),i=e.getAttribute("id");let a=[];const p=c(n);for(const r of p)r.constID!==i&&a.push(r);g(n,a),e.remove(),o.querySelector(".container-block")||(o.innerHTML=l)}});y();
//# sourceMappingURL=commonHelpers2.js.map
