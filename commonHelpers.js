import{S as c,i}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u=new c(".gallery a");function f(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(e=>`
    <div class="photo-card">
      <a href="${e.largeImageURL}" target="_blank">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
       <p><i class="img-text">Likes </i><span>${e.likes}</span></p>
        <p><i class="img-text">Views </i><span>${e.views}</span></p>
        <p><i class="img-text">Comments </i><span>${e.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${e.downloads}</span></p>
      </div>
    </div>
  `).join(""),u.refresh()}const p="42510436-747a3ee758966b4b69f3c3ec4";function d(s){const r=document.querySelector(".loader");r.style.display="block",fetch(`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),r.style.display="none",e.hits.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(e.hits)}).catch(e=>{console.error("Error fetching images:",e),r.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const m=document.querySelector("#search-form"),l=document.querySelector("#search-input");m.addEventListener("submit",s=>{s.preventDefault();const r=l.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query"});return}d(r),l.value=""});
//# sourceMappingURL=commonHelpers.js.map
