(()=>{"use strict";window.addEventListener("DOMContentLoaded",(async()=>{let e=[];document.querySelector("#delAllCache").addEventListener("click",(function(){n.forEach((async e=>{const t=await caches.open(e);t.keys().then((e=>e.forEach((function(e){t.delete(e)})))).finally((()=>window.location.reload()))}))}));const t=document.querySelector("div#container"),n=await caches.keys();n.forEach((async n=>{const a=await caches.open(n);(await a.keys()).forEach((function(n,c,i){e=e.concat(i);const d=document.createElement("div");d.classList.add("item"),d.setAttribute("title",n.url),d.setAttribute("data-url",n.url),d.setAttribute("data-file-name",new URL(n.url).pathname.split("/")[new URL(n.url).pathname.split("/").length-1]);const o=document.createElement("button");o.classList.add("deleteBtn"),o.innerText="删除",o.addEventListener("click",(t=>function(t,n){const a=parseInt(t.target.getAttribute("data-index"));n.delete(e[a]).then((function(){document.querySelector("div#container").children[a+1].remove()}))}(t,a))),o.setAttribute("data-index",c),t.appendChild(d),d.appendChild(o)}))}))}))})();