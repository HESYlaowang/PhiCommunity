(()=>{"use strict";var e,t={246:(e,t,n)=>{e.exports=n.p+"assets/TapToStart.mp3"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),e=r(246),window.addEventListener("DOMContentLoaded",(()=>{fetch("https://api.github.com/repos/HanHan233/PhiCommunity/commits?per_page=1").then((e=>e.json())).then((e=>{document.querySelector("#ver").innerText=e[0].sha.slice(0,7)}));try{document.querySelector("#device").innerText="Platform: "+navigator.userAgentData.platform+" ; isMobile:"+navigator.userAgentData.mobile}catch(e){document.querySelector("#device").innerText="User-Agent : "+navigator.userAgent.slice(navigator.userAgent.lastIndexOf(" "))}document.querySelector("#device").title=navigator.userAgent,fetch(e).then((e=>e.arrayBuffer())).then((e=>{const t=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext);t.decodeAudioData(e,(function(e){var n=t.createBufferSource();n.buffer=e,n.loop=!0,n.connect(t.destination),n.start(0)}))})),document.body.addEventListener("click",(()=>{console.log("Clicked! Redirecting to MainPage");var e=document.createElement("div");e.classList.add("fadeIn"),document.body.appendChild(e),setTimeout((()=>{0==window.localStorage.length?location.href="../settings/index.html":location.href="../chapterSelect/index.html"}),510)}))}))})();