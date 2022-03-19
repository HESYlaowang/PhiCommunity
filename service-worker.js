(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[t.prefix,e,t.suffix].filter((e=>e&&e.length>0)).join("-"),n=e=>e||a(t.precache),r=e=>e||a(t.runtime);function i(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class c{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const o=new Set;function h(e){return"string"==typeof e?new Request(e):e}s(873);class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new c,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let a=h(t);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const a=h(t);await(0,new Promise((e=>setTimeout(e,0))));const n=await this.getCacheKey(a,"write");if(!s)throw new e("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:l,matchOptions:u}=this._strategy,d=await self.caches.open(l),f=this.hasCallback("cacheDidUpdate"),p=f?await async function(e,t,s,a){const n=i(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),c=await e.keys(t,r);for(const t of c)if(n===i(t.url,s))return e.match(t,a)}(d,n.clone(),["__WB_REVISION__"],u):null;try{await d.put(n,f?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of o)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:l,oldResponse:p,newResponse:c.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=h(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class u{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new l(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(t,s,a){let n;await t.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,t),!n||"error"===n.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(n=await r({error:e,event:a,request:s}),n)break;if(!n)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))n=await e({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}class d extends u{async _handle(t,s){let a,n=await s.cacheMatch(t);if(n);else try{n=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}if(!n)throw new e("no-response",{url:t.url,error:a});return n}}const f={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class p extends u{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(f),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,s){const a=[],n=[];let r;if(this._networkTimeoutSeconds){const{id:e,promise:i}=this._getTimeoutPromise({request:t,logs:a,handler:s});r=e,n.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:t,logs:a,handler:s});n.push(i);const c=await s.waitUntil((async()=>await s.waitUntil(Promise.race(n))||await i)());if(!c)throw new e("no-response",{url:t.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}s(80);const g=e=>e&&"object"==typeof e?e:{handle:e};class w{constructor(e,t,s="GET"){this.handler=g(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=g(e)}}class y extends w{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class m{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,g(e))}setCatchHandler(e){this._catchHandler=g(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let _;function R(t,s,a){let n;if("string"==typeof t){const e=new URL(t,location.href);n=new w((({url:t})=>t.href===e.href),s,a)}else if(t instanceof RegExp)n=new y(t,s,a);else if("function"==typeof t)n=new w(t,s,a);else{if(!(t instanceof w))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=t}return(_||(_=new m,_.addFetchListener(),_.addCacheListener()),_).registerRoute(n),n}function v(e,t){const s=t();return e.waitUntil(s),s}function C(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:a}=t;if(!a)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}s(977);class b{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class q{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let U,L;class k extends u{constructor(e={}){e.cacheName=n(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(k.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=n.integrity,r=t.integrity,i=!r||r===e;a=await s.fetch(new Request(t,{integrity:r||e})),e&&i&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,a.clone()))}return a}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(t);if(!await s.cachePut(t,a.clone()))throw new e("bad-precaching-response",{url:t.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==k.copyRedirectedCacheableResponsesPlugin&&(a===k.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(k.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}k.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},k.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let a=null;if(t.url&&(a=new URL(t.url).origin),a!==self.location.origin)throw new e("cross-origin-copy-response",{origin:a});const n=t.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(r):r,c=function(){if(void 0===U){const e=new Response("");if("body"in e)try{new Response(e.body),U=!0}catch(e){U=!1}U=!1}return U}()?n.body:await n.blob();return new Response(c,i)}(t):t};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new k({cacheName:n(e),plugins:[...t,new q({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const a of t){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:t,url:n}=C(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:t});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==a.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(t,a.integrity)}if(this._urlsToCacheKeys.set(n,t),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return v(e,(async()=>{const t=new b;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return v(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}const x=()=>(L||(L=new T),L);class K extends w{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(n);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}const P={get googleAnalytics(){return e||a(t.googleAnalytics);var e},get precache(){return n()},get prefix(){return t.prefix},get runtime(){return r()},get suffix(){return t.suffix}};var N,E;E={prefix:"phi",precache:"precache",runtime:"runtime",suffix:"v1"},(e=>{for(const s of Object.keys(t))e(s)})((e=>{"string"==typeof E[e]&&(t[e]=E[e])})),self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),console.log(P),R(/\.(html)$/,new p),R(/\.(css|js)$/,new d),R(/\.(css|js|mp3|wav|ogg|png|jpg|svg|webp)$/,new d({cacheName:"static-cache"})),R(/^https?:\/\/api\.(.*)/,new p),R(/alicdn\.com/,new d({cacheName:"alicdn-cache"})),N=[{'revision':'076b71cc2cfbe3a0ed63c70c2dd65805','url':'404.css'},{'revision':'c9130c70722c7195228321c12b99d46c','url':'404.html'},{'revision':'1d68d105b4355dac90dc28cf9f0fc674','url':'AppIcon.png'},{'revision':'311fe76362696d70d5bf716aa2711031','url':'CNAME'},{'revision':'1d98a825eb28a51994977cea5512d022','url':'COMMITHASH'},{'revision':'4b2ad8d14095f9537f4a14865f5d4c95','url':'LASTCOMMITDATETIME'},{'revision':'0b71ffad5997fa206e335480516ca62e','url':'LevelOver/index.html'},{'revision':'265daa4d579b291d8d42f0fcfb92e374','url':'VERSION'},{'revision':'b8117afb827f973ac3d16cd3d6bd9a99','url':'aboutUs/index.html'},{'revision':null,'url':'assets/0.8bd6.png'},{'revision':null,'url':'assets/A15A.bf51.svg'},{'revision':null,'url':'assets/AboutUs.46b4.mp3'},{'revision':null,'url':'assets/AppIcon.9255.svg'},{'revision':null,'url':'assets/Avatar.cdd7.svg'},{'revision':null,'url':'assets/B15B.fe0c.svg'},{'revision':null,'url':'assets/Back.0514.svg'},{'revision':null,'url':'assets/Back.9f1f.svg'},{'revision':null,'url':'assets/C15C.8cee.svg'},{'revision':null,'url':'assets/ChapterSelect0.edd0.mp3'},{'revision':null,'url':'assets/Drag.0b13.ogg'},{'revision':null,'url':'assets/Drag.4f65.png'},{'revision':null,'url':'assets/Drag.7fcd.png'},{'revision':null,'url':'assets/Drag2HL.d8ba.png'},{'revision':null,'url':'assets/DragHL.1606.png'},{'revision':null,'url':'assets/ElementSqare.Half.Size.f7ec.webp'},{'revision':null,'url':'assets/Exit.16df.mp3'},{'revision':null,'url':'assets/Exo-Regular.d901.otf'},{'revision':null,'url':'assets/F15F.2e2c.svg'},{'revision':null,'url':'assets/Flick.50eb.png'},{'revision':null,'url':'assets/Flick.9b90.ogg'},{'revision':null,'url':'assets/Flick.ce10.png'},{'revision':null,'url':'assets/Flick2HL.6ace.png'},{'revision':null,'url':'assets/FlickHL.cc19.png'},{'revision':null,'url':'assets/Hold.3d8e.png'},{'revision':null,'url':'assets/HoldBody.5641.png'},{'revision':null,'url':'assets/HoldEnd.64a0.png'},{'revision':null,'url':'assets/HoldEnd.8f11.png'},{'revision':null,'url':'assets/HoldHL.9caa.png'},{'revision':null,'url':'assets/HoldHead.ae5b.png'},{'revision':null,'url':'assets/HoldHeadHL.83c6.png'},{'revision':null,'url':'assets/JudgeLine.aa03.png'},{'revision':null,'url':'assets/LevelOver0.78f9.ogg'},{'revision':null,'url':'assets/LevelOver1.83d3.ogg'},{'revision':null,'url':'assets/LevelOver2.d36e.ogg'},{'revision':null,'url':'assets/LevelOver3.ad57.ogg'},{'revision':null,'url':'assets/Pause.bb32.png'},{'revision':null,'url':'assets/Pause.bfd6.mp3'},{'revision':null,'url':'assets/ProgressBar.11e3.png'},{'revision':null,'url':'assets/Restart.1019.svg'},{'revision':null,'url':'assets/Resume.e4ec.svg'},{'revision':null,'url':'assets/S15S.f7d3.svg'},{'revision':null,'url':'assets/Settings.00da.svg'},{'revision':null,'url':'assets/SongNameBar.679a.png'},{'revision':null,'url':'assets/Sort.11d6.svg'},{'revision':null,'url':'assets/Start.8240.mp3'},{'revision':null,'url':'assets/Tap.4a30.ogg'},{'revision':null,'url':'assets/Tap.50dc.png'},{'revision':null,'url':'assets/Tap.9ce9.png'},{'revision':null,'url':'assets/Tap2.be94.png'},{'revision':null,'url':'assets/Tap2.d605.png'},{'revision':null,'url':'assets/Tap2HL.90ec.png'},{'revision':null,'url':'assets/TapHL.907d.png'},{'revision':null,'url':'assets/TapToStart.bfd5.mp3'},{'revision':null,'url':'assets/Tick.e9a8.svg'},{'revision':null,'url':'assets/Title.3d47.svg'},{'revision':null,'url':'assets/V15FC.c4de.svg'},{'revision':null,'url':'assets/V15V.afc0.svg'},{'revision':null,'url':'assets/calibrate.9f6c.mp3'},{'revision':null,'url':'assets/clickRaw.4435.png'},{'revision':null,'url':'assets/clickRaw.c48a.png'},{'revision':null,'url':'assets/manifest.dfd4.webmanifest'},{'revision':null,'url':'assets/mute.e3f1.ogg'},{'revision':null,'url':'assets/phi15phi.e585.svg'},{'revision':null,'url':'assets/selectSongItem.7cc8.mp3'},{'revision':null,'url':'assets/showgirl_Half.b325.png'},{'revision':'cb33266c287c9dffb4b0c74d6333068e','url':'cacheControl/index.html'},{'revision':'5a28a428251d2848c59f11e170f888de','url':'chapterSelect/index.html'},{'revision':null,'url':'css/LevelOver.4a910e2d7409edfda2d2.css'},{'revision':null,'url':'css/aboutUs.2b0687a0cc746a66ab05.css'},{'revision':null,'url':'css/cacheControl.41857b233ffccf603418.css'},{'revision':null,'url':'css/calibrate.0e082c2f6aa235a4b81f.css'},{'revision':null,'url':'css/chapterSelect.d482f38adb912bad9592.css'},{'revision':null,'url':'css/index.5e8dddd1299a3f1cbd61.css'},{'revision':null,'url':'css/loadingChartScreen.a7268fc976a716971c5c.css'},{'revision':null,'url':'css/loadingScreen.d99502e1fb2d35d38908.css'},{'revision':null,'url':'css/settings.4a8d2d90f3bed4fb61ea.css'},{'revision':null,'url':'css/songSelect.5987ad5572d1b5bbbd34.css'},{'revision':null,'url':'css/statistic.a20beea85c032d09caa7.css'},{'revision':null,'url':'css/tapToStart.62278924f4253453ac65.css'},{'revision':null,'url':'css/whilePlaying.14d0091fd4d7170d9a97.css'},{'revision':'656ef8176b28232ecbedf2fd721eced6','url':'favicon.ico'},{'revision':'09737075a962888ae1fc528ebaae51ac','url':'index.html'},{'revision':null,'url':'js/LevelOver.c4199ddecedb0b65ca7f.js'},{'revision':null,'url':'js/aboutUs.9016a20eb73fcb29fa15.js'},{'revision':null,'url':'js/cacheControl.dd8cfe4bc8cecf44966f.js'},{'revision':null,'url':'js/calibrate.9005bea9308b56d539e6.js'},{'revision':null,'url':'js/chapterSelect.e2949ce004b4eeb88e25.js'},{'revision':null,'url':'js/index.ee5bf134c565f788c06c.js'},{'revision':null,'url':'js/loadingChartScreen.19bc78f57cd8329e9fe9.js'},{'revision':null,'url':'js/loadingScreen.68260ec4a850edfddfd9.js'},{'revision':null,'url':'js/settings.975cb6e03afe696edb40.js'},{'revision':null,'url':'js/songSelect.dada2610b661e8993e24.js'},{'revision':null,'url':'js/statistic.6e8abaa95641d0db1131.js'},{'revision':null,'url':'js/tapToStart.c41c67eb93576820ecb7.js'},{'revision':null,'url':'js/whilePlaying.2b039898dbfa18526e0f.js'},{'revision':'5e2c2dcef8831a3b25e3c225405a069d','url':'loadingChartScreen/index.html'},{'revision':'24ee75f05ae8e55f05d36e4f79ef9743','url':'loadingScreen/index.html'},{'revision':'2cbc9a8c41fcd01cf3a76e507186a942','url':'manifest.webmanifest'},{'revision':'71803490ae2ea5101242c6618800b4a1','url':'settings/calibrate/index.html'},{'revision':'eb0949ff39e82d83cd50e273ee35b487','url':'settings/index.html'},{'revision':'5ef0728faf966c7f701d0aa5ab4c47c2','url':'settings/statistic/index.html'},{'revision':'2857a19309e7f511f2c75df7ee84e4f3','url':'songSelect/index.html'},{'revision':'7452d329702955252a767daaa208f5ab','url':'tapToStart/index.html'},{'revision':'e52e6a977fe84b70016cfe35e3689cf6','url':'whilePlaying/index.html'}],x().precache(N),function(e){const t=x();R(new K(t,undefined))}()})()})();