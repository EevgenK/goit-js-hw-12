import{a as g,i as v,S}from"./assets/vendor-oevwmKEY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();g.defaults.baseURL="https://pixabay.com/api/";const d=async(e,r=1)=>{try{return(await g.get("",{params:{key:"45547752-43a0cb06c467be16aeef39c83",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:r}})).data}catch(a){console.error(a.message)}},w=(e,r)=>{const a=r.map(({webformatURL:i,largeImageURL:t,tags:s,likes:n,views:y,comments:b,downloads:L})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${i}" alt="${s}" />
        
        <ul class="info-list">
          <li class="info-item"><b>Likes</b>
          <span>${n}</span></li>
          <li class="info-item"><b>Views</b>
          <span>${y}</span></li>
          <li class="info-item"><b>Comments</b>
          <span>${b}</span></li>
          <li class="info-item"><b>Downloads
          <span></b>${L}</span></li>
        </ul>
        </a>
      </li>`).join("");e.insertAdjacentHTML("beforeend",a)},k=e=>{e.insertAdjacentHTML("afterend",'<span class="loader visible"></span>')},x=e=>e.innerHTML="",c=e=>v.warning({message:e,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"https://raw.githubusercontent.com/EevgenK/goit-js-hw-11/main/src/img/error.png",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px",theme:"dark"}),u=e=>e.classList.add("visible"),f=e=>e.classList.remove("visible"),o={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loadBtn:document.querySelector(".load")};let m=1,l="",p;const P=new S(".gallery a",{captionsData:"alt",captionDelay:250}),h=e=>{e.length>0?(w(o.gallery,e),P.refresh()):c("Sorry, there are no images matching your search query. Please try again!")},q=e=>{m+=1,u(p),d(l,m).then(({hits:r})=>h(r)).catch(r=>c("Ooops... Something go wrong. Please, try again later")).finally(()=>{f(p)})},O=e=>{e.preventDefault(),f(o.loadBtn);const r=e.currentTarget;if(l=r.input.value.trim(),!l)return c("There's nothing to search. Please, type the query target first!");k(o.loadBtn),p=document.querySelector(".loader"),x(o.gallery),d(l).then(({hits:a})=>h(a)).then(()=>{u(o.loadBtn),o.loadBtn.addEventListener("click",q)}).catch(a=>c("Ooops... Something go wrong. Please, try again later")).finally(()=>{p.classList.remove("visible"),r.reset()})};o.form.addEventListener("submit",O);
//# sourceMappingURL=index.js.map
