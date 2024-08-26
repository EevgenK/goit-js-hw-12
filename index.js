import{i as g,S as p}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=r=>{const o="https://pixabay.com/api/",a=new URLSearchParams({key:"45547752-43a0cb06c467be16aeef39c83",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>console.log(s))},h=(r,o)=>{const a=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:c,comments:m,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${s}" alt="${t}" />
        
        <ul class="info-list">
          <li class="info-item"><b>Likes</b>
          <span>${n}</span></li>
          <li class="info-item"><b>Views</b>
          <span>${c}</span></li>
          <li class="info-item"><b>Comments</b>
          <span>${m}</span></li>
          <li class="info-item"><b>Downloads
          <span></b>${u}</span></li>
        </ul>
        </a>
      </li>`).join("");r.innerHTML=a},d=r=>{r.insertAdjacentHTML("afterend",'<span class="loader visible"></span>')},y=r=>r.innerHTML="",l=r=>g.warning({message:r,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"https://raw.githubusercontent.com/EevgenK/goit-js-hw-11/main/src/img/error.png",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px",theme:"dark"}),i={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery")},b=new p(".gallery a",{captionsData:"alt",captionDelay:250}),L=r=>{r.preventDefault();const o=r.currentTarget,a=o.input.value.trim();if(console.log("str",a),!a)return l("There's nothing to search. Please, type the query target first!");d(i.form);const s=document.querySelector(".loader");y(i.gallery),f(a).then(({hits:e})=>{e.length>0?(h(i.gallery,e),b.refresh()):l("Sorry, there are no images matching your search query. Please try again!")}).catch(e=>l("Ooops... Something go wrong. Please, try again later")).finally(()=>{s.classList.remove("visible"),o.reset()})};i.form.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
