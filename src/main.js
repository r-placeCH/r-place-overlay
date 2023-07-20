!function(){"use strict";class t extends Map{set(t,e){return super.set(t,e),e}}class e extends WeakMap{set(t,e){return super.set(t,e),e}}
/*! (c) Andrea Giammarchi - ISC */const n=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,a=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g,s=/([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g,o=/[\x01\x02]/g;const i=(t,e)=>111===t.nodeType?1/e<0?e?(({firstChild:t,lastChild:e})=>{const n=document.createRange();return n.setStartAfter(t),n.setEndAfter(e),n.deleteContents(),t})(t):t.lastChild:e?t.valueOf():t.firstChild:t,{isArray:r}=Array,l=t=>null==t?t:t.valueOf(),c=(t,e)=>{let n,a,s=e.slice(2);return!(e in t)&&(a=e.toLowerCase())in t&&(s=a.slice(2)),e=>{const a=r(e)?e:[e,!1];n!==a[0]&&(n&&t.removeEventListener(s,n,a[1]),(n=a[0])&&t.addEventListener(s,n,a[1]))}};const{isArray:h,prototype:d}=Array,{indexOf:u}=d,{createDocumentFragment:p,createElement:m,createElementNS:g,createTextNode:f,createTreeWalker:y,importNode:w}=new Proxy(document,{get:(t,e)=>t[e].bind(t)});let v;const b=(t,e)=>e?(t=>{v||(v=g("http://www.w3.org/2000/svg","svg")),v.innerHTML=t;const e=p();return e.append(...v.childNodes),e})(t):(t=>{const e=m("template");return e.innerHTML=t,e.content})(t),x=({childNodes:t},e)=>t[e],C=(t,e,n)=>((t,e,n,a,s)=>{const o=n.length;let i=e.length,r=o,l=0,c=0,h=null;for(;l<i||c<r;)if(i===l){const e=r<o?c?a(n[c-1],-0).nextSibling:a(n[r-c],0):s;for(;c<r;)t.insertBefore(a(n[c++],1),e)}else if(r===c)for(;l<i;)h&&h.has(e[l])||t.removeChild(a(e[l],-1)),l++;else if(e[l]===n[c])l++,c++;else if(e[i-1]===n[r-1])i--,r--;else if(e[l]===n[r-1]&&n[c]===e[i-1]){const s=a(e[--i],-1).nextSibling;t.insertBefore(a(n[c++],1),a(e[l++],-1).nextSibling),t.insertBefore(a(n[--r],1),s),e[i]=n[r]}else{if(!h){h=new Map;let t=c;for(;t<r;)h.set(n[t],t++)}if(h.has(e[l])){const s=h.get(e[l]);if(c<s&&s<r){let o=l,d=1;for(;++o<i&&o<r&&h.get(e[o])===s+d;)d++;if(d>s-c){const o=a(e[l],0);for(;c<s;)t.insertBefore(a(n[c++],1),o)}else t.replaceChild(a(n[c++],1),a(e[l++],-1))}else l++}else t.removeChild(a(e[l++],-1))}return n})(t.parentNode,e,n,i,t),k=(t,e)=>{switch(e[0]){case"?":return((t,e,n)=>a=>{const s=!!l(a);n!==s&&((n=s)?t.setAttribute(e,""):t.removeAttribute(e))})(t,e.slice(1),!1);case".":return((t,e)=>"dataset"===e?(({dataset:t})=>e=>{for(const n in e){const a=e[n];null==a?delete t[n]:t[n]=a}})(t):n=>{t[e]=n})(t,e.slice(1));case"@":return c(t,"on"+e.slice(1));case"o":if("n"===e[1])return c(t,e)}switch(e){case"ref":return(t=>{let e;return n=>{e!==n&&(e=n,"function"==typeof n?n(t):n.current=t)}})(t);case"aria":return(t=>e=>{for(const n in e){const a="role"===n?n:`aria-${n}`,s=e[n];null==s?t.removeAttribute(a):t.setAttribute(a,s)}})(t)}return((t,e)=>{let n,a=!0;const s=document.createAttributeNS(null,e);return e=>{const o=l(e);n!==o&&(null==(n=o)?a||(t.removeAttributeNode(s),a=!0):(s.value=o,a&&(t.setAttributeNodeNS(s),a=!1)))}})(t,e)};function S(t){const{type:e,path:n}=t,a=n.reduceRight(x,this);return"node"===e?(t=>{let e,n,a=[];const s=o=>{switch(typeof o){case"string":case"number":case"boolean":e!==o&&(e=o,n||(n=f("")),n.data=o,a=C(t,a,[n]));break;case"object":case"undefined":if(null==o){e!=o&&(e=o,a=C(t,a,[]));break}if(h(o)){e=o,0===o.length?a=C(t,a,[]):"object"==typeof o[0]?a=C(t,a,o):s(String(o));break}if(e!==o)if("ELEMENT_NODE"in o)e=o,a=C(t,a,11===o.nodeType?[...o.childNodes]:[o]);else{const t=o.valueOf();t!==o&&s(t)}break;case"function":s(o(t))}};return s})(a):"attr"===e?k(a,t.name):(t=>{let e;return n=>{const a=l(n);e!=a&&(e=a,t.textContent=null==a?"":a)}})(a)}const M=t=>{const e=[];let{parentNode:n}=t;for(;n;)e.push(u.call(n.childNodes,t)),t=n,({parentNode:n}=t);return e},E="isÂµ",$=new e,T=/^(?:textarea|script|style|title|plaintext|xmp)$/,P=(t,e)=>{const i="svg"===t,r=((t,e,i)=>{let r=0;return t.join("").trim().replace(a,((t,e,a,o)=>{let r=e+a.replace(s,"=$2$1").trimEnd();return o.length&&(r+=i||n.test(e)?" /":"></"+e),"<"+r+">"})).replace(o,(t=>""===t?"\x3c!--"+e+r+++"--\x3e":e+r++))})(e,E,i),l=b(r,i),c=y(l,129),h=[],d=e.length-1;let u=0,p=`${E}${u}`;for(;u<d;){const t=c.nextNode();if(!t)throw`bad template: ${r}`;if(8===t.nodeType)t.data===p&&(h.push({type:"node",path:M(t)}),p=`${E}${++u}`);else{for(;t.hasAttribute(p);)h.push({type:"attr",path:M(t),name:t.getAttribute(p)}),t.removeAttribute(p),p=`${E}${++u}`;T.test(t.localName)&&t.textContent.trim()===`\x3c!--${p}--\x3e`&&(t.textContent="",h.push({type:"text",path:M(t)}),p=`${E}${++u}`)}}return{content:l,nodes:h}},I=(t,e)=>{const{content:n,nodes:a}=$.get(e)||$.set(e,P(t,e)),s=w(n,!0);return{content:s,updates:a.map(S,s)}},N=(t,{type:e,template:n,values:a})=>{const s=D(t,a);let{entry:o}=t;o&&o.template===n&&o.type===e||(t.entry=o=((t,e)=>{const{content:n,updates:a}=I(t,e);return{type:t,template:e,content:n,updates:a,wire:null}})(e,n));const{content:i,updates:r,wire:l}=o;for(let t=0;t<s;t++)r[t](a[t]);return l||(o.wire=(t=>{const{firstChild:e,lastChild:n}=t;if(e===n)return n||t;const{childNodes:a}=t,s=[...a];return{ELEMENT_NODE:1,nodeType:111,firstChild:e,lastChild:n,valueOf:()=>(a.length!==s.length&&t.append(...s),t)}})(i))},D=({stack:t},e)=>{const{length:n}=e;for(let a=0;a<n;a++){const n=e[a];n instanceof R?e[a]=N(t[a]||(t[a]={stack:[],entry:null,wire:null}),n):h(n)?D(t[a]||(t[a]={stack:[],entry:null,wire:null}),n):t[a]=null}return n<t.length&&t.splice(n),n};class R{constructor(t,e,n){this.type=t,this.template=e,this.values=n}}const A=n=>{const a=new e;return Object.assign(((t,...e)=>new R(n,t,e)),{for(e,s){const o=a.get(e)||a.set(e,new t);return o.get(s)||o.set(s,(t=>(e,...a)=>N(t,{type:n,template:e,values:a}))({stack:[],entry:null,wire:null}))},node:(t,...e)=>N({stack:[],entry:null,wire:null},new R(n,t,e)).valueOf()})},U=new e,L=A("html");var q,F,B;function O(t,e,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(t):a?a.value:e.get(t)}function j(t,e,n,a,s){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?s.call(t,n):s?s.value=n:e.set(t,n),n}function z(t){return Object.fromEntries(t.split("\r\n").filter((t=>!!t)).map((t=>t.split(": ").map((t=>t.trim().replace(/^"+/,"").replace(/"+$/,""))))))}A("svg"),function(t){t.rPlacePixelSize=1,t.MaxSiteSpecificDetectAttempts=3,t.SiteSpecificDetectRetryDelayMs=1e3,t.ScriptReloadCheckPeriodMs=6e4}(q||(q={}));class W{constructor(){F.set(this,[]),B.set(this,!1)}enqueue(t){return new Promise(((e,n)=>{O(this,F,"f").push({work:t,resolve:e,reject:n}),O(this,B,"f")||(j(this,B,!0,"f"),this.workLoop())}))}async workLoop(){for(;O(this,F,"f").length;){const t=O(this,F,"f").shift();try{const e=await t.work();t.resolve(e)}catch(e){t.reject(e)}}j(this,B,!1,"f")}}function H(t){return new Promise((e=>setTimeout((()=>{e()}),t)))}function V(t,e){t instanceof HTMLCanvasElement&&e.push(t),t instanceof HTMLElement&&t.shadowRoot&&V(t.shadowRoot,e);for(const n of t.children)V(n,e)}function G(){let t=[];return V(document.documentElement,t),t.sort(((t,e)=>{const n=t.width*t.height-e.width*e.height;if(0!==n)return-n;const a=Number(window.getComputedStyle(t).opacity)-Number(window.getComputedStyle(e).opacity);return Number.isNaN(a)?0:-a})),0===t.length?null:t[0]}F=new WeakMap,B=new WeakMap;class _{constructor(t,e){this.canvas=t,this.embed=e,this.canvas=t,this.embed=e}}class K{constructor(t,e=!1,n=function(t){}){this.name=t,this.enabled=e,this.callback=n}onclick(){this.enabled=!this.enabled,this.callback(this)}htmlFor(t,e){const n=["clickable"];return this.enabled&&n.push("alwaysshow"),L.for(t,e)`<div data-id=${e} class=${n.join(" ")} onclick=${()=>this.onclick()}>
      ${this.name}: <span>${this.enabled?"Enabled":"Disabled"}</span>
    </div>`}}class X{constructor(t,e=["Unset"],n=0,a=function(t){},s=!1){this.name=t,this.values=e,this.valueIx=n,this.callback=a,this.alwaysShow=s}get value(){return this.values[this.valueIx]}onclick(){this.valueIx=(this.valueIx+1)%this.values.length,this.callback(this)}htmlFor(t,e){const n=["clickable"];return this.alwaysShow&&n.push("alwaysshow"),L.for(t,e)`<div data-id=${e} class=${n.join(" ")} onclick=${()=>this.onclick()}>
      ${this.name}: <span>${this.value}</span>
    </div>`}}class Y{constructor(t,e=function(t){},n=!1){this.name=t,this.callback=e,this.alwaysShow=n}onclick(){this.callback(this)}htmlFor(t,e){const n=["clickable"];return this.alwaysShow&&n.push("alwaysshow"),L.for(t,e)`<div data-id=${e} class=${n.join(" ")} onclick=${()=>this.onclick()}>
      ${this.name}
    </div>`}}class J{constructor(t,e,n=!1){this.name=t,this.content=e,this.alwaysShow=n}htmlFor(t,e){const n=[];return this.alwaysShow&&n.push("alwaysshow"),L.for(t,e)`<div data-id=${e} class=${n.join(" ")}>${this.name}: ${this.content}</div>`}}class Q{constructor(t,e){this.settings=[],this.settingNames=new Map,this.settingsByName=new Map;const n=this;requestAnimationFrame((function a(s){((t,e)=>{const n="function"==typeof e?e():e,a=U.get(t)||U.set(t,{stack:[],entry:null,wire:null}),s=n instanceof R?N(a,n):n;s!==a.wire&&(a.wire=s,t.replaceChildren(s.valueOf()))})(t,n.htmlFor(e,"settings")),requestAnimationFrame(a)}))}htmlFor(t,e){return L.for(t,e)`${this.settings.map((t=>t.htmlFor(this,this.settingNames.get(t))))}`}addSetting(t,e){this.settings.push(e),this.settingNames.set(e,t),this.settingsByName.set(t,e)}getSetting(t){return this.settingsByName.get(t)}}class Z{constructor(t,e,n,a,s){this.mlpMinimapBlock=t,this.imageCanvas=e,this.imageCanvasCtx=n,this.crosshairBlock=a,this.settingsBlock=s}setTemplate(t){this.imageCanvas.width=t.template.getWidth(),this.imageCanvas.height=t.template.getHeight(),t.template.drawTo(this.imageCanvasCtx)}recalculateImagePos(t){const e=q.rPlacePixelSize,n=t,a=this.getMinimapSize();this.imageCanvas.style.width=this.imageCanvas.width*e*n.scale+"px",this.imageCanvas.style.height=this.imageCanvas.height*e*n.scale+"px",this.imageCanvas.style["margin-left"]=-1*((n.x*e+e/2)*n.scale-a.width/2)+"px",this.imageCanvas.style["margin-top"]=-1*((n.y*e+e/2)*n.scale-a.height/2)+"px",this.crosshairBlock.style.width=e*n.scale+"px",this.crosshairBlock.style.height=e*n.scale+"px"}getMinimapSize(){return{width:this.mlpMinimapBlock.clientWidth,height:this.mlpMinimapBlock.clientHeight}}}var tt;class et{constructor(t,e){tt.set(this,void 0),j(this,tt,t,"f"),this.cacheKey=e}getWidth(){return O(this,tt,"f").width}getHeight(){return O(this,tt,"f").height}getImageData(){return O(this,tt,"f").data}drawTo(t){t.putImageData(O(this,tt,"f"),0,0)}getDithered3x(){const t=new ImageData(3*O(this,tt,"f").width,3*O(this,tt,"f").height);for(let e=0;e<O(this,tt,"f").height;++e)for(let n=0;n<O(this,tt,"f").width;++n){const a=4*(e*O(this,tt,"f").width+n),s=4*((3*e+1)*t.width+(3*n+1));for(let e=0;e<4;++e)t.data[s+e]=O(this,tt,"f").data[a+e]}return t}}function nt(t,e){const n=z(e.responseHeaders);return"MaybeChangedNotCached"!=t&&n.ETag?"MaybeChangedCached"==t||304!=e.status?"MaybeChangedCached":"NotChanged":"MaybeChangedNotCached"}tt=new WeakMap;class at{constructor(t,e,n,a,s,o){this.template=n,this.templateURL=a,this.mask=s,this.maskURL=o,this.width=t,this.height=e}async update(t,e){let n={};t.cacheKey&&(n["If-None-Match"]=t.cacheKey);const a=await at.fetchURL(e,{headers:n});if(304==a.status)return"NotChanged";if(200!=a.status)throw a;return{template:await at.pixelsFromResponse(a),response:a}}async updateIfDifferent(){let t="NotChanged";const e=await this.update(this.template,this.templateURL);if("NotChanged"!=e&&(this.template=e.template,t=nt(t,e.response)),this.mask){const e=await this.update(this.mask,this.maskURL);"NotChanged"!=e&&(this.mask=e.template,t=nt(t,e.response))}return t}static async fetchURL(t,e){return await(n={...e,method:"GET",responseType:"arraybuffer",url:`${t}?t=${(new Date).getTime()}`},new Promise(((t,e)=>{n.onload=t,n.onerror=e,n.onabort=e,n.ontimeout=e,GM.xmlHttpRequest(n)})));var n}static async pixelsFromResponse(t){const e=await createImageBitmap(new Blob([new Uint8ClampedArray(t.response)])),n=document.createElement("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0);const s=a.getImageData(0,0,e.width,e.height);return new et(s,z(t.responseHeaders).ETag)}static async fetchTemplatePixels(t){const e=await this.fetchURL(t);if(200!=e.status)throw e;return await this.pixelsFromResponse(e)}static async fetchTemplate(t,e){const n=await this.fetchTemplatePixels(t);let a=e?await this.fetchTemplatePixels(e):void 0;return!a||a.getHeight()==n.getHeight()&&a.getWidth()==n.getWidth()||(a=void 0),new at(n.getWidth(),n.getHeight(),n,t,a,e)}}async function st(t,e,n){for(await H(6e4);;)try{const a=await t.enqueue((async()=>{const t=await e().updateIfDifferent();return t.startsWith("MaybeChanged")&&n(),t}));"MaybeChangedCached"==a||"NotChanged"==a?await H(3e4):"MaybeChangedNotCached"==a&&await H(3e5)}catch(t){console.error("Error updating template",t),await H(6e4)}}class ot{constructor(t,e,n){this.canvas=t,this.templateDict=e,this.template=n,this.overlayCanvas=document.createElement("canvas"),this.overlayContext=this.overlayCanvas.getContext("2d")}static async create(t,e){const n=await at.fetchTemplate(e.canvasUrl);return new ot(t,e,n)}inject(){this.canvas.parentElement.appendChild(this.overlayCanvas);new MutationObserver((()=>{this.updateOverlayStyle()})).observe(this.canvas,{attributes:!0})}updateOverlayStyle(){let t=getComputedStyle(this.canvas),e=!1;const n=3*this.template.width,a=3*this.template.height;this.overlayCanvas.width!=n&&(e=!0,this.overlayCanvas.width=n),this.overlayCanvas.height!=n&&(e=!0,this.overlayCanvas.height=a),this.overlayCanvas.style.position="absolute";const s=t=>"auto"==t?"0":t;this.overlayCanvas.style.top=s(t.top),this.overlayCanvas.style.left=s(t.left),this.overlayCanvas.style.translate=t.translate,this.overlayCanvas.style.transform=t.transform;const o=parseFloat(t.width)/this.canvas.width,i=parseFloat(t.height)/this.canvas.height;this.overlayCanvas.style.width=this.template.width*o+"px",this.overlayCanvas.style.height=this.template.height*i+"px",this.overlayCanvas.style.zIndex=`${parseInt(t.zIndex)+1}`,this.overlayCanvas.style.pointerEvents="none",this.overlayCanvas.style.imageRendering="pixelated",e&&(this.overlayContext=this.overlayCanvas.getContext("2d"),this.applyTemplate())}applyTemplate(){const t=this.template.template.getDithered3x();this.overlayContext.putImageData(t,0,0)}}let it;const rt=new Uint8Array(16);function lt(){if(!it&&(it="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!it))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return it(rt)}const ct=[];for(let t=0;t<256;++t)ct.push((t+256).toString(16).slice(1));var ht,dt,ut={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function pt(t,e,n){if(ut.randomUUID&&!e&&!t)return ut.randomUUID();const a=(t=t||{}).random||(t.rng||lt)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=a[t];return e}return function(t,e=0){return(ct[t[e+0]]+ct[t[e+1]]+ct[t[e+2]]+ct[t[e+3]]+"-"+ct[t[e+4]]+ct[t[e+5]]+"-"+ct[t[e+6]]+ct[t[e+7]]+"-"+ct[t[e+8]]+ct[t[e+9]]+"-"+ct[t[e+10]]+ct[t[e+11]]+ct[t[e+12]]+ct[t[e+13]]+ct[t[e+14]]+ct[t[e+15]]).toLowerCase()}(a)}function mt(...t){return t.map((t=>Array.isArray(t)||"object"==typeof t&&null!==t?JSON.stringify(t):t)).join(" ")}ht=new WeakMap,dt=new WeakMap;const gt=new class{constructor(t){ht.set(this,void 0),dt.set(this,void 0),j(this,ht,t,"f"),j(this,dt,pt(),"f")}send(t){GM.xmlHttpRequest({url:O(this,ht,"f").toString(),method:"POST",data:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async placedPixel(t,e,n,a,s,o){const i={id:O(this,dt,"f"),event:"pixel",type:t,template:e,pos:{x:n.x,y:n.y},color:a,timestamp:s/1e3,nextPixelPlace:o};this.send(i)}async logError(...t){const e={id:O(this,dt,"f"),event:"error",timestamp:(new Date).getTime()/1e3,message:mt(...t)};this.send(e)}async statusUpdate(t,e,n){const a={id:O(this,dt,"f"),event:"status",timestamp:(new Date).getTime()/1e3,template:t,correctPixels:e,totalPixels:n};this.send(a)}}(new URL("http://ponyplace-compute.ferrictorus.com/analytics/placepixel"));function ft(...t){console.log(`[${(new Date).toISOString()}]`,...t)}function yt(...t){console.error(`[${(new Date).toISOString()}]`,...t),gt.logError(...t)}!async function(){await new Promise((t=>{"complete"==document.readyState&&t();const e=function(){"complete"==document.readyState&&(document.removeEventListener("readystatechange",e),t())};document.addEventListener("readystatechange",e)})),await H(1e3);let t=G();if(!t)return void yt("Could not find a canvas, shutting down overlay.");ft("Found canvas: ",t);var e=null;const n=new URL(window.location.href).origin;(n.endsWith("reddit.com")||n.endsWith("place.equestria.dev"))&&(console.log("Known site detected. Attempting to load site specific handler."),(e=await async function(){for(let t=q.MaxSiteSpecificDetectAttempts;0!=t;--t)try{const t=document.querySelector("garlic-bread-embed");if(!t){console.log("Failed to find `garlic-bread-embed`");continue}const e=t.shadowRoot.querySelector("div > garlic-bread-share-container > garlic-bread-camera > garlic-bread-canvas").shadowRoot.querySelector("canvas");if(!e){console.log("Failed to find `garlic-bread-canvas`");continue}return new _(e,t)}catch(t){console.log("Failed to get the reddit canvas: ",t)}finally{console.log(`Retries left: ${t}`),await H(q.SiteSpecificDetectRetryDelayMs)}return null}())&&(t=e.canvas));const a=[],s=new Map,o=function(t,e){return`https://ponyplace.z19.web.core.windows.net/${t}/${e}.png`},i=function(t,e){s.set(t,{canvasUrl:o(t,"canvas"),autoPickUrl:e.autoPick?o(t,"autopick"):void 0,maskUrl:e.mask?o(t,"mask"):void 0}),a.push(t)};let r,l,c;i("mlp",{autoPick:!0,mask:!0}),i("mlp_alliance",{autoPick:!0,mask:!0});const h=function(t){const e=s.get(t);void 0!==e?(r=t,l=e):yt("Invalid /r/place template name:",t)};if(h(a[0]),!e)return yt("Failed to find site specific handler. Falling back to overlay."),h(a[1]),void async function(t,e){const n=await ot.create(t,e);n.inject(),n.updateOverlayStyle(),st(new W,(()=>n.template),(()=>{n.applyTemplate()}))}(t,l);e.embed.camera.applyPosition({x:Math.floor(t.width/2),y:Math.floor(t.height/2),zoom:0});class d extends EventTarget{constructor(){super();var t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((e=>this[e]=(...n)=>t[e](...n)))}}const u=await new Promise((t=>{let n=setInterval((()=>{try{const a=e.embed.shadowRoot.querySelector("garlic-bread-status-pill").shadowRoot.querySelector("garlic-bread-coordinates").shadowRoot;console.log("Found coordinate block. Good!"),t(a),clearInterval(n)}catch(t){yt("Failed to attach to coordinate block. Trying again...")}}),1e3)})),p=new class extends d{parseCoordinateBlock(){return e.embed.camera?{scale:Math.ceil(e.embed.camera.zoom),x:Math.ceil(e.embed.camera.cx-.5),y:Math.ceil(e.embed.camera.cy-.5)}:{scale:0,x:0,y:0}}constructor(t){super();var e=this;this.coordinateBlock=t,this.pos={x:0,y:0,scale:0},requestAnimationFrame((function t(n){const a=e.parseCoordinateBlock();var s,o;s=e.pos,o=a,(s.x!==o.x||s.y!==o.y||s.scale!==o.scale)&&(e.pos=a,e.dispatchEvent(new Event("posChanged"))),requestAnimationFrame(t)}))}}(u),m=function(t){var e;const n=t.createElement("div");n.innerHTML='<style>\nmlpminimap {\n  display: block;\n  color: white;\n  width: 400px;\n  height: 300px;\n  position: absolute;\n  top: 0%;\n  right: 0%;\n  background-color: rgba(0,0,0,.75);\n  border: 1px solid black;\n  overflow: hidden;\n}\n\nmlpminimap .map {\n  position: absolute;\n  margin: 0;\n  max-width: unset;\n  display: block;\n  image-rendering: pixelated;\n  pointer-events: none;\n}\n\nmlpminimap .crosshair {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  border: 2px solid red;\n  transform: translateX(-50%) translateY(-50%);\n}\n\nmlpminimap #resizer {\n  position: absolute;\n  bottom: 0%;\n  left: 0%;\n  width: 0px;\n  height: 0px;\n  border-bottom: 10px solid red;\n  border-left: 10px solid red;\n  border-top: 10px solid transparent;\n  border-right: 10px solid transparent;\n}\n\nmlpminimap .settings {\n  position: absolute;\n  background-color: rgba(0,0,0,.75);\n}\n\nmlpminimap .settings > div{\n  display: none;\n}\n\nmlpminimap .settings > .alwaysshow{\n  display: block;\n}\n\nmlpminimap:hover .settings > div{\n  display: block;\n}\n\nmlpminimap .settings .clickable {\n  cursor: pointer;\n  user-select: none;\n}\n\nmlpminimap #noSleep {\ndisplay: none;\n}\n</style>\n<mlpminimap>\n  <canvas class="map"></canvas>\n  <div class="crosshair"></div>\n  <div class="settings"></div>\n  <div id="resizer"></div>\n  <audio id="noSleep" src="https://hot-potato.reddit.com/media/interactions/select-color.mp3" playsinline></audio>\n</mlpminimap>',null===(e=t.querySelector("body"))||void 0===e||e.appendChild(n);const a=n.querySelector("mlpminimap"),s=a.querySelector(".map"),o=s.getContext("2d"),i=a.querySelector(".crosshair"),r=a.querySelector(".settings");return new Z(a,s,o,i,r)}(document),g=m.mlpMinimapBlock;m.crosshairBlock;const f=m.settingsBlock,y=document.createElement("canvas");y.width=t.width,y.height=t.height;const w=y.getContext("2d");let v;const b=await GM.getValue("enableAutoPick",!1);const x=new Q(f,g);!function(n){n.addSetting("templateName",new X("Template",a,0,(function(t){h(t.value),v()}),!0)),n.addSetting("findArt",new Y("Find our art!",(function(){!function(){const n=m.imageCanvasCtx.getImageData(0,0,t.width,t.height).data,a=[];for(let e=0;e<n.length;e+=4){if(0===n[e+3])continue;const s=e/4%t.width,o=Math.floor(e/4/t.width);!!a.find((t=>Math.abs(s-t.x)<T&&Math.abs(o-t.y)<T))||a.push({x:s,y:o})}const s=a.sort(((t,e)=>t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0));if(s.length>0){null===P?P=0:(P++,P>=s.length&&(P=0));const t=s[P];console.log(`Moving to art at: [x: ${t.x}, y: ${t.y}]`),e.embed.camera.applyPosition(t)}}()}))),n.addSetting("autoColor",new K("Auto color picker",!1,(function(t){v()}))),n.addSetting("autoPick",new K("Use the priority-based template",b,(function(t){GM.setValue("enableAutoPick",t.enabled),v()}))),n.addSetting("pixelDisplayProgress",new J("Current progress","Unknown",!0)),n.addSetting("downloadCanvas",new Y("Download r/place Canvas",(()=>{!async function(){e.embed.camera.applyPosition({x:Math.floor(t.width/2),y:Math.floor(t.height/2),zoom:0}),await H(1e3);const n=document.createElement("a");n.setAttribute("download","rplace.png"),t.toBlob((t=>{const e=URL.createObjectURL(t);n.setAttribute("href",e),n.click()}))}()})))}(x);g.querySelector("#noSleep").volume=.1;const C=e.embed.shadowRoot.querySelector("garlic-bread-color-picker").shadowRoot.querySelectorAll(".palette button.color"),k=[];for(const t of C){const e=t.children[0].style.backgroundColor.match(/rgb\(([0-9]{1,3}), ([0-9]{1,3}), ([0-9]{1,3})\)/),n=parseInt(t.getAttribute("data-color"));e?k.push([+e[1],+e[2],+e[3],n]):k.push([0,0,0,-1])}let S;const M=new W;function E(t){let e,n=255;for(const a of k){const s=Math.abs(t[0]-a[0])+Math.abs(t[1]-a[1])+Math.abs(t[2]-a[2]);if(0===s)return a;s<n&&(n=s,e=a)}return e}const $=t=>{!function(t){const e=t.template.getImageData();t.template.getWidth(),t.template.getHeight();for(let t=0;t<e.length/4;t++){const n=4*t,a=e.slice(n,n+3);if(a[0]+a[1]+a[2]===0)continue;const s=E(a);e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2]}}(t),m.setTemplate(t),m.recalculateImagePos(p.pos),w.clearRect(0,0,y.width,y.height),t.mask?(t.mask.drawTo(w),function(){const t=w.getImageData(0,0,y.width,y.height).data;c=new Array(y.width*y.height);for(let e=0;e<c.length;e++)c[e]=t[4*e+1]}()):c=void 0};v=function(){return M.enqueue((async()=>{const t=void 0!==l.autoPickUrl&&x.getSetting("autoPick").enabled?l.autoPickUrl:l.canvasUrl;S=await at.fetchTemplate(t,l.maskUrl),$(S)}))},await v(),st(M,(()=>S),(()=>{$(S)}));const T=100;let P=null;function I(t){for(let e=t.length;e>0;){const n=Math.floor(Math.random()*e--),a=t[e];t[e]=t[n],t[n]=a}}const N=75;function D(e){const n=new Map;var a=0;for(let s=0;s<e.length;s++){const o=e[s],[i,r]=o,l=c[i+r*t.width];if(0===l)continue;a++;const h=n.get(l);void 0===h?n.set(l,[o]):h.push(o)}const s=function(t,e){const n=[...t.entries()].sort((([t],[e])=>e-t));for(const[,t]of n){if(!(t.length<=e))return I(t),t[e];e-=t.length}const a=Array.from(t.keys()).reduce(((t,e)=>Math.max(t,e)),0),s=t.get(a);return s[Math.floor(Math.random()*s.length)]}(n,Math.floor(Math.random()*Math.min(N,a)));return s}const R=g.querySelector("#resizer");function A(t){if(255!==t.data[3])return;const n=t.data[0],a=t.data[1],s=t.data[2];let o=[];for(const t of k)o.push(Math.abs(n-t[0])+Math.abs(a-t[1])+Math.abs(s-t[2]));let i=0;for(let t=0;t<o.length;t++)o[i]>o[t]&&(i=t);e.embed.selectedColor=k[i][3]}new class{constructor(t,e,n=(()=>{})){var a,s,o,i;function r(t){e.style.width=o-t.clientX+a+"px",e.style.height=i+t.clientY-s+"px",n()}function l(t){document.documentElement.removeEventListener("mousemove",r,!1),document.documentElement.removeEventListener("mouseup",l,!1)}t.addEventListener("mousedown",(function(t){a=t.clientX,s=t.clientY,o=parseInt(document.defaultView.getComputedStyle(e).width,10),i=parseInt(document.defaultView.getComputedStyle(e).height,10),document.documentElement.addEventListener("mousemove",r,!1),document.documentElement.addEventListener("mouseup",l,!1)}),!1)}}(R,g,(()=>{m.recalculateImagePos(p.pos)})),p.addEventListener("posChanged",(()=>{if(m.recalculateImagePos(p.pos),x.getSetting("autoColor").enabled)try{A(m.imageCanvasCtx.getImageData(p.pos.x,p.pos.y,1,1))}catch(t){console.error(t)}}));const U=document.createElement("canvas");U.width=t.width,U.height=t.height;const F=U.getContext("2d");e.embed._events._getEventTarget().addEventListener("confirm-pixel",(function(){const t=(new Date).getTime(),n=t+1e3*e.embed.nextTileAvailableIn,a=n+B;gt.placedPixel("manual-browser",r,p.pos,e.embed.selectedColor,t,{reddit:n,safe:a})}));const B=3e3;function O(n=!1){M.enqueue((async()=>{F.clearRect(0,0,U.width,U.height),F.drawImage(m.imageCanvas,0,0),F.globalCompositeOperation="source-in",F.drawImage(t,0,0),F.globalCompositeOperation="source-over";const a=function(t,e,n,a){const s=n.getImageData(0,0,t,e).data,o=a.getImageData(0,0,t,e).data,i=[];var r=0;for(let e=0;e<o.length/4;e++)if(0!==s[4*e+3]&&(r++,o[4*e+0]!==s[4*e+0]||o[4*e+1]!==s[4*e+1]||o[4*e+2]!==s[4*e+2])){const n=e%t,a=(e-n)/t;i.push([n,a])}return[i,r]}(U.width,U.height,F,m.imageCanvasCtx),s=a[0],o=a[1];(n&&Math.random()<.5||Math.random()<.01)&&gt.statusUpdate(r,o,s.length);const i=o-s.length,h=(100*i/o).toPrecision(3);if(x.getSetting("pixelDisplayProgress").content=L`<span style="font-weight: bold;"
        >${h}% (${i}/${o})</span
      >`,n&&S){if(void 0===l.autoPickUrl)return;if(ft(`Status: ${h}% (${i}/${o}) [${e.embed.shadowRoot.querySelector("garlic-bread-status-pill").shadowRoot.querySelector("div").innerText}]`),(!e.embed.nextTileAvailableIn||n)&&s.length>0)try{const t=function(t){var e;e=void 0===l.maskUrl||void 0===c?t[Math.floor(Math.random()*t.length)]:D(t);const[n,a]=e;return{x:n,y:a}}(s),n=m.imageCanvasCtx.getImageData(t.x,t.y,1,1),a=F.getImageData(t.x,t.y,1,1);A(n),e.embed.camera.applyPosition(t),e.embed.showColorPicker=!0;const o=e.embed.selectedColor;ft(`Ready to place pixel [x: ${t.x}, y: ${t.y}, color: ${o}, current-color: ${a.data}, new-color: ${n.data}]`)}catch(t){console.error("Error getting pixel to place",t)}}}))}const j=e.embed.shadowRoot.querySelector("garlic-bread-color-picker").shadowRoot.querySelector("div > div > div.actions"),z=document.createElement("button");z.innerText="Pick Priority Pixel",z.setAttribute("style","height:44px; min-width: 44px; padding: 0px; border: var(--pixel-border); box-sizing: border-box; background-color: #ffffff; flex: 1 1 0%; cursor:pointer;  color: rgb(18, 18, 18); font-size 20px; position:relative; --button-border-width: 4px; border-image-slice: 1; margin-left: 16px;"),z.onclick=()=>{O(!0)},j.appendChild(z),(async()=>{for(;;)await H(5e3),O(!1)})()}()}();
//# sourceMappingURL=minimap.user.js.map
