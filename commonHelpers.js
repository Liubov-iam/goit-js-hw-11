import{S as c,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=new c(".gallery a");function f(n){const t=document.querySelector(".gallery");t.innerHTML=n.map(r=>`
    <div class="photo-card">
      <a href="${r.largeImageURL}" target="_blank">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
       <p><i class="img-text">Likes </i><span>${r.likes}</span></p>
        <p><i class="img-text">Views </i><span>${r.views}</span></p>
        <p><i class="img-text">Comments </i><span>${r.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${r.downloads}</span></p>
      </div>
    </div>
  `).join(""),u.refresh()}const d="42510436-747a3ee758966b4b69f3c3ec4",p=document.querySelector(".loader");p.style.display="none";function m(n){const t=document.querySelector(".loader"),r=document.querySelector(".gallery");t.style.display="block",r.innerHTML="",fetch(`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()}).then(o=>{console.log(o),o.hits.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):f(o.hits)}).catch(o=>{console.error("Error fetching images:",o),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{t.style.display="none"})}const y=document.querySelector("#search-form"),l=document.querySelector("#search-input");y.addEventListener("submit",n=>{n.preventDefault();const t=l.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query"});return}m(t),l.value=""});
//# sourceMappingURL=commonHelpers.js.map
