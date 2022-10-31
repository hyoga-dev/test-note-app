(()=>{"use strict";let e;function t(t,o){const n=t;if(e&&n){const t=1.5*Math.floor(n.screenX-e.screenX),l=-1.5*Math.floor(n.screenY-e.screenY);t<25&&t>-25&&l<25&&l>-25&&(o.style.transform=`rotateX(${l/1.3}deg) rotateY(${t/1.3}deg)`)}e=n}let o,n,l,s,r,c,i,d,a,u,p=document.querySelectorAll(".box");function m(e){for(let t=0;t<p.length;t++){const o=parseInt(getComputedStyle(e).getPropertyValue("top")),n=parseInt(getComputedStyle(e).getPropertyValue("left")),l=document.querySelector(".container"),s=parseInt(getComputedStyle(e).getPropertyValue("width")),r=parseInt(getComputedStyle(e).getPropertyValue("height")),c=parseInt(getComputedStyle(l).getPropertyValue("height")),i=parseInt(getComputedStyle(l).getPropertyValue("width"));if(o<0&&n>i-s)return e.style.top="0",e.style.left=i-s+"px",localStorage.setItem(`top${t}`,"0"),localStorage.setItem(`left${t}`,i-s+"px"),void localStorage.setItem("container",l.innerHTML);if(o>c-r&&n<0)return e.style.top=c-r+"px",e.style.left="0",localStorage.setItem(`top${t}`,c-r+"px"),localStorage.setItem(`left${t}`,"0"),void localStorage.setItem("container",l.innerHTML);if(o>c-r&&n>i-s)return e.style.top=c-r+"px",e.style.left=i-s+"px",localStorage.setItem(`top${t}`,c-r+"px"),localStorage.setItem(`left${t}`,i-s+"px"),void localStorage.setItem("container",l.innerHTML);if(o<0&&n<0)return e.style.top="0",e.style.left="0",localStorage.setItem(`top${t}`,"0"),localStorage.setItem(`left${t}`,"0"),void localStorage.setItem("container",l.innerHTML);if(o<0)return e.style.top="0",localStorage.setItem(`top${t}`,"0"),void localStorage.setItem("container",l.innerHTML);if(n<0)return e.style.left="0",localStorage.setItem(`left${t}`,"0"),void localStorage.setItem("container",l.innerHTML);if(o>c-r)return e.style.top=c-r+"px",localStorage.setItem(`top${t}`,c-r+"px"),void localStorage.setItem("container",l.innerHTML);if(n>i-s)return e.style.left=i-s+"px",localStorage.setItem(`left${t}`,i-s+"px"),void localStorage.setItem("container",l.innerHTML);localStorage.setItem("container",l.innerHTML)}}function y(e,t=document){return t.getElementById(e)}function f(e,t=document){return t.querySelector(e)}function g(e,t=document){return[...t.querySelectorAll(e)]}function h(e,t){return getComputedStyle(e).getPropertyValue(t)}class x{constructor(e,t){this.menu=y(e),this.card=g(t),this.cardName=t,this.prevEvent,this.rightBox=function(e){e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block",this.select=e.target},this.clickRight=this.rightBox.bind(this)}}x.prototype.flyEffect=function(e,t){const o=e;if(this.prevEvent&&o){const e=1.5*Math.floor(o.screenX-this.prevEvent.screenX),n=-1.5*Math.floor(o.screenY-this.prevEvent.screenY);e<25&&e>-25&&n<25&&n>-25&&(t.style.transform=`rotateX(${n/1.3}deg) rotateY(${e/1.3}deg)`)}this.prevEvent=o},x.prototype.refreshFly=function(){let e=g(".box");const t=g(".box")[e.length-1];function o(e){t.style.resize="both";let o=parseInt(getComputedStyle(t).getPropertyValue("z-index")),a=parseInt(getComputedStyle(t).getPropertyValue("width")),u=parseInt(getComputedStyle(t).getPropertyValue("height"));if(c=Math.floor(t.getBoundingClientRect().left),i=Math.floor(t.getBoundingClientRect().top),s=e.clientX,r=e.clientY,s-c<a-2||r-i<u-2){e.preventDefault(),d=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)o=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),d.push(o);let s=Math.max(...d);t.style.zIndex=s+1,window.addEventListener("mousemove",n),window.addEventListener("mouseup",l)}}function n(e){a=!0,t.style.boxShadow="0 30px 50px 0 var(--box-border)";const o=e.clientX-(s-c),n=e.clientY-(r-i);t.style.left=`${o}px`,t.style.top=`${n}px`;const l=e;if(u&&l){const e=1.5*Math.floor(l.screenX-u.screenX),o=-1.5*Math.floor(l.screenY-u.screenY);e<25&&e>-25&&o<25&&o>-25&&(t.style.transform=`rotateX(${o/1.3}deg) rotateY(${e/1.3}deg)`)}u=l}function l(){1!=a?(container.style.userSelect="auto",t.setAttribute("contenteditable",""),t.focus(),t.classList.add("selected")):(t.setAttribute("contenteditable","false"),container.style.userSelect="none"),a=!1,t.style.boxShadow="none",t.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",l),m(t)}t.addEventListener("mousedown",o),t.addEventListener("keydown",(()=>{t.style.height="auto"})),t.addEventListener("focus",(()=>{t.removeEventListener("mousedown",o),t.style.cursor="text"})),t.addEventListener("blur",(()=>{t.addEventListener("mousedown",o),t.style.cursor="default"}))},x.prototype.addContext=function(e){const t=e.target.className.split(" ")[1];"delete"==e.target.id||"side-delete"==t?this.removeSelected():"copy"==e.target.id?(e.preventDefault(),"BODY"!=document.activeElement.tagName&&(this.copiedText=document.activeElement.cloneNode(!0))):"paste"==e.target.id?(this.paste(e,this.copiedText),this.refreshEvent(),this.refreshFly()):"lock"==e.target.id?document.activeElement.setAttribute("contenteditable",!1):"unlock"==e.target.id?this.unlock():"unlockall"==e.target.id?this.unlockAll():"side-copy"==t&&(this.copiedText=document.activeElement.cloneNode(!0)),this.menu.style.display="none"},x.prototype.duplicate=function(){if("BODY"!=document.activeElement.tagName){if(this.copiedText=document.activeElement.cloneNode(!0),null!=this.copiedText){o==this.copiedText&&(this.copiedText=o.cloneNode(!0)),f(".container").appendChild(this.copiedText);const e=parseInt(getComputedStyle(this.copiedText).getPropertyValue("top")),t=parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"));this.copiedText.style.top=e+20+"px",this.copiedText.style.left=t+20+"px",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),o=this.copiedText}}else alert("You are not selecting anything")},x.prototype.pasteKey=function(){if(null!=this.copiedText){l==this.copiedText&&(this.copiedText=l.cloneNode(!0)),f(".container").appendChild(this.copiedText);const e=parseInt(getComputedStyle(this.copiedText).getPropertyValue("top")),t=parseInt(getComputedStyle(this.copiedText).getPropertyValue("left"));this.copiedText.style.top=e+20+"px",this.copiedText.style.left=t+20+"px",this.copiedText.style.cursor="default",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),l=this.copiedText}},x.prototype.paste=function(e,t){if(null!=t){n==this.copiedText&&(this.copiedText=n.cloneNode(!0)),f(".container").appendChild(this.copiedText);const t=e.clientX,o=e.clientY;this.copiedText.style.top=o-40+"px",this.copiedText.style.left=t-40+"px",this.copiedText.style.cursor="default",this.copiedText.addEventListener("contextmenu",(e=>{e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block"})),n=this.copiedText}},x.prototype.unlockAll=function(){this.card=g(this.cardName),this.card.forEach((e=>{if("false"==e.getAttribute("contenteditable")){e.classList.add("selected");const t=()=>document.addEventListener("mouseup",o),o=()=>{document.removeEventListener("mouseup",o)};setTimeout(t,200)}e.setAttribute("contenteditable",!0)}))},x.prototype.unlock=function(){this.select.setAttribute("contenteditable",!0),this.select.classList.add("selected");const e=()=>{this.select.classList.remove("selected"),document.removeEventListener("mouseup",e)};setTimeout((()=>document.addEventListener("mouseup",e)),200),this.select.classList.remove("locked"),this.select.classList.add("box")},x.prototype.removeSelected=function(){g(".selected").forEach((e=>{e.remove()}))},x.prototype.unselect=function(e){const t=e.target.className.split(" ").filter((e=>"box"===e)),o=g(".selected"),n=e.shiftKey;console.log(e.button),0===e.button&&("box"!=t&&""!=t||o.forEach((t=>{"d-select-all"!=e.target.id&&"d-delete"!=e.target.id&&"delete"!=e.target.id&&(n||t.classList.remove("selected"))})))},x.prototype.refreshEvent=function(){this.card=g(this.cardName),this.card.forEach((e=>{e.addEventListener("contextmenu",this.clickRight)}))},x.prototype.shortCut=function(e){const t=e.ctrlKey,o=e.shiftKey,n=e.key;if(t&&o&&("C"!=n&&"c"!=n||(e.preventDefault(),"BODY"!=document.activeElement.tagName&&(this.copiedText=document.activeElement.cloneNode(!0)))),t&&o&&("V"!=n&&"v"!=n||(e.preventDefault(),this.pasteKey(),this.refreshEvent(),this.refreshFly())),!t||"l"!=n&&"L"!=n||(e.preventDefault(),g(".selected").forEach((e=>{e.setAttribute("contenteditable",!1)}))),!t||"a"!=n&&"A"!=n||(e.preventDefault(),g(".box").forEach((e=>{e.classList.add("selected")}))),t&&o&&("l"!=n&&"L"!=n||(e.preventDefault(),this.unlockAll())),"Delete"==n&&this.removeSelected(),"ArrowDown"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("top"));e.style.top=t+5+"px"})))}if("ArrowUp"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("top"));e.style.top=t-5+"px"})))}if("ArrowRight"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("left"));e.style.left=t+5+"px"})))}if("ArrowLeft"==n){const t=g(".selected");t.length>1&&(e.preventDefault(),t.forEach((e=>{const t=parseInt(getComputedStyle(e).getPropertyValue("left"));e.style.left=t-5+"px"})))}},x.prototype.eventHandler=function(){document.addEventListener("mousedown",this.unselect),document.addEventListener("contextmenu",(e=>e.preventDefault())),document.addEventListener("mousedown",(e=>this.addContext(e))),document.activeElement.addEventListener("keydown",(e=>this.shortCut(e)))};const v=y("container");let b,E,L,S,w,I,C,k=document.getElementById("btn"),A=0,T=document.querySelector(".grab-container"),$=document.querySelectorAll(".box");function B(e,t,o){e.preventDefault(),document.execCommand(t,!1,o)}class P{constructor(e,t,o){this.menu=y(e),this.card=g(t),this.cardName=t,this.contextMenu=o,this.prevEvent,this.rightBox=e=>{if("container"==e.target.className){e.preventDefault();const t=e.clientX,o=e.clientY;this.menu.style.top=o+"px",this.menu.style.left=t+"px",this.menu.style.display="block",this.select=e.target}},this.clickRight=this.rightBox.bind(this)}docRightClick(){document.addEventListener("contextmenu",this.clickRight)}}P.prototype.selectAll=function(){this.card=g(".box"),this.card.forEach((e=>{e.classList.add("selected")}))},P.prototype.addContext=function(){document.addEventListener("mousedown",(e=>{"d-paste"==e.target.id&&(this.contextMenu.paste(e,this.contextMenu.copiedText),this.contextMenu.refreshFly(),this.contextMenu.refreshEvent()),"d-select-all"==e.target.id&&this.selectAll(e),"d-delete"==e.target.id&&this.contextMenu.removeSelected(),"unlockall"==e.target.id&&this.contextMenu.unlockAll(),this.menu.style.display="none"}),!1)},document.getElementById("btn").addEventListener("mousedown",(function(){function e(){T.classList.remove("slide-left"),b=!0,function(e){let o,n,l,s,r,c,i,d;const a=document.createElement("div");a.classList.add("box"),a.style.opacity="0",a.style.zIndex="100",v.appendChild(a);let u=document.querySelectorAll(".box"),p=u[u.length-1];p.setAttribute("placeholder","type here..."),p.setAttribute("Spellcheck",!1),p.style.resize="both",o=e.clientX,n=e.clientY;const y=document.getElementById("btn"),f=parseInt(y.getBoundingClientRect().left),g=parseInt(y.getBoundingClientRect().top),h=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("top")),b=parseInt(getComputedStyle(document.getElementById("btn")).getPropertyValue("left"));function E(e){p.style.cursor="grabbing",p.style.boxShadow="0 30px 50px 0 var(--box-border)",p.style.opacity="1",window.addEventListener("mouseup",L);let r=e.clientX-(o-l),c=e.clientY-(n-s);p.style.left=`${r}px`,p.style.top=`${c}px`,t(e,p)}function L(){p.style.cursor="default",p.style.boxShadow="none",p.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",L),m(p)}p.style.left=b-86+"px",p.style.top=`${h}px`,l=Math.floor(f-60),s=Math.floor(g-25),window.addEventListener("mousemove",E);for(let S=0;S<document.querySelectorAll(".box").length;S++){let w=document.querySelectorAll(".box")[S];function I(e){let t=parseInt(getComputedStyle(w).getPropertyValue("z-index")),r=parseInt(getComputedStyle(w).getPropertyValue("width")),c=parseInt(getComputedStyle(w).getPropertyValue("height"));if(l=Math.floor(w.getBoundingClientRect().left),s=Math.floor(w.getBoundingClientRect().top),o=e.clientX,n=e.clientY,o-l<r-2||n-s<c-2){e.preventDefault(),i=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)t=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),i.push(t);let o=Math.max(...i);if(o<100)w.style.zIndex=o+1,localStorage.setItem(`index${S}`,o);else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",C),window.addEventListener("mouseup",A)}}function C(e){d=!0,w.style.boxShadow="0 30px 50px 0 var(--box-border)";let t=e.clientX-(o-l),i=e.clientY-(n-s);w.style.left=`${t}px`,w.style.top=`${i}px`,localStorage.setItem(`top${[S]}`,i+"px"),localStorage.setItem(`left${[S]}`,t+"px"),function(){if(c=e,r&&c){const e=1.5*Math.floor(c.screenX-r.screenX),t=-1.5*Math.floor(c.screenY-r.screenY);e<25&&e>-25&&t<25&&t>-25&&(w.style.transform=`rotateX(${t/1.3}deg) rotateY(${e/1.3}deg)`)}r=c}()}w.addEventListener("mousedown",I),w.addEventListener("focus",(()=>{w.removeEventListener("mousedown",I),w.style.cursor="text"})),w.addEventListener("blur",(()=>{w.addEventListener("mousedown",I),w.style.cursor="default"}));const k=new x("context-menu",".box");function A(){1!=d?(v.style.userSelect="auto",w.setAttribute("contenteditable",""),w.focus(),w.classList.add("selected")):(w.setAttribute("contenteditable","false"),v.style.userSelect="none"),d=!1,w=document.querySelectorAll(".box"),w=document.querySelectorAll(".box")[S],w.style.boxShadow="none",w.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",A),m(w),k.eventHandler(),k.refreshEvent()}}}(event),A=0,k.removeEventListener("mousemove",e)}k.addEventListener("mousemove",e),k.addEventListener("mouseup",(function(){function e(){T.classList.remove("slide-left"),window.removeEventListener("click",e)}T.classList.add("slide-left"),setTimeout((()=>{T.classList.remove("slide-left")}),5e3),setTimeout((()=>{window.addEventListener("click",e)}),0)})),window.addEventListener("mouseup",(function t(){b||k.removeEventListener("mousemove",e),b=!1,window.removeEventListener("mouseup",t)}))})),function(){for(let e=0;e<$.length;e++){const o=document.querySelectorAll(".box")[e];function n(t){o.style.resize="both";let n=parseInt(getComputedStyle(o).getPropertyValue("z-index")),r=parseInt(getComputedStyle(o).getPropertyValue("width")),c=parseInt(getComputedStyle(o).getPropertyValue("height"));if(S=Math.floor(o.getBoundingClientRect().left),w=Math.floor(o.getBoundingClientRect().top),E=t.clientX,L=t.clientY,E-S<r-2||L-w<c-2){t.preventDefault(),I=[];for(let e=0;e<document.querySelectorAll(".box").length;e++)n=parseInt(getComputedStyle(document.querySelectorAll(".box")[e]).getPropertyValue("z-index")),I.push(n);let r=Math.max(...I);if(r<100)o.style.zIndex=r+1,localStorage.setItem(`index${e}`,r);else for(let e=0;e<document.querySelectorAll(".box").length;e++)localStorage.setItem(`index${e}`,localStorage.getItem(`index${e}`)-10),document.querySelectorAll(".box")[e].style.zIndex=localStorage.getItem(`index${e}`);window.addEventListener("mousemove",l),window.addEventListener("mouseup",s)}}function l(n){C=!0,o.style.boxShadow="0 30px 50px 0 var(--box-border)";const l=n.clientX-(E-S),s=n.clientY-(L-w);o.style.left=`${l}px`,o.style.top=`${s}px`,localStorage.setItem(`top${[e]}`,s+"px"),localStorage.setItem(`left${[e]}`,l+"px"),t(n,o)}function s(){1!=C?(container.style.userSelect="auto",o.setAttribute("contenteditable",""),o.focus(),o.classList.add("selected")):(o.setAttribute("contenteditable","false"),container.style.userSelect="none"),C=!1,o.style.boxShadow="none",o.style.transform="rotateX(0) rotateY(0)",window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",s),m(o)}o.addEventListener("mousedown",n),o.addEventListener("keydown",(()=>{o.style.height="auto"})),o.addEventListener("focus",(()=>{o.removeEventListener("mousedown",n),o.style.cursor="text"})),o.addEventListener("blur",(()=>{o.addEventListener("mousedown",n),o.style.cursor="default"}))}}();const Y=new x("context-menu",".box");Y.refreshEvent(),Y.eventHandler();const M=new P("document-context-menu","document-menu",Y);M.docRightClick(),M.addContext(),document.getElementById("bold").addEventListener("mousedown",(()=>B(event,"bold"))),document.getElementById("h1").addEventListener("mousedown",(()=>B(event,"formatBlock","h1"))),document.getElementById("paragraph").addEventListener("mousedown",(()=>B(event,"formatBlock","p"))),document.getElementById("italic").addEventListener("mousedown",(()=>B(event,"italic"))),document.getElementById("align-right").addEventListener("mousedown",(()=>B(event,"justifyRight"))),document.getElementById("align-center").addEventListener("mousedown",(()=>B(event,"justifyCenter"))),document.getElementById("align-left").addEventListener("mousedown",(()=>B(event,"justifyLeft"))),document.getElementById("align-full").addEventListener("mousedown",(()=>B(event,"justifyFull"))),document.getElementById("ul").addEventListener("mousedown",(()=>B(event,"insertUnorderedList"))),document.getElementById("ol").addEventListener("mousedown",(()=>B(event,"insertOrderedList")));const X=e=>`#${e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map((e=>parseInt(e,10).toString(16).padStart(2,"0"))).join("")}`,V=f(".color-palette-bg"),D=y("bg-color"),q=D.getBoundingClientRect().left,N=g(".color-item-bg");V.style.left=q-74+"px",V.style.top="80px",D.addEventListener("click",(()=>V.style.display="grid")),document.addEventListener("click",(function(e){const t=e.target,o=t.className.split(" ")[1];"color-palette-bg"!=t.className&&"color-item-bg"!=o&&"bg-color"!=t.id&&"text-back-color"!=t.alt&&(V.style.display="none")})),N.forEach((e=>{const t=h(e,"background-color");e.addEventListener("mousedown",(e=>{e.preventDefault(),document.execCommand("backColor",!1,X(t)),"#e1e54a"!=X(t)?(console.log(X(t)),document.execCommand("foreColor",!1,"#ffffff")):document.execCommand("foreColor",!1,"#dd5845")}))}));const R=f(".color-palette"),z=y("color"),H=z.getBoundingClientRect().left,F=g(".color-item");R.style.left=H-74+"px",R.style.top="80px",z.addEventListener("click",(()=>R.style.display="grid")),document.addEventListener("click",(function(e){const t=e.target,o=t.className.split(" ")[1];"color-palette"!=t.className&&"color-item"!=o&&"color"!=t.id&&"text-color"!=t.alt&&(R.style.display="none")})),F.forEach((e=>{const t=h(e,"background-color");e.addEventListener("mousedown",(e=>{e.preventDefault(),document.execCommand("foreColor",!1,X(t))}))}));const j=f(".setting-container"),K=y("setting"),O=(y("color"),y("bg-color"),f(".setting-container")),U=(f(".setting-modal"),f(".switch")),G=f(".switch-button"),J=f(":root"),Q=y("text-color"),W=y("back-color"),Z=y("ol-icon");let _=!1;j.onclick=e=>{"setting-container"!=e.target.className&&"close"!=e.target.id||(O.style.transform="translate(100%, 0)",O.style.opacity="0",O.style.backdropFilter="blur(0)")},K.onclick=()=>{O.style.transform="translate(0, 0)",O.style.opacity="1",O.style.backdropFilter="blur(2px)"},U.onclick=()=>{G.classList.toggle("switch-button-on"),_?(Q.setAttribute("src","/src/asset/text-color.svg"),W.setAttribute("src","/src/asset/back-color.svg"),Z.setAttribute("src","/src/asset/ol.svg"),J.style.setProperty("--dark-text","#4e6d89"),J.style.setProperty("--back-color","#f7f7f7"),J.style.setProperty("--normal-text","#8199aa"),J.style.setProperty("--container-color","#e1e7ee"),_=!1):(Q.setAttribute("src","/src/asset/text-color-dark.svg"),W.setAttribute("src","/src/asset/bg-color-dark.svg"),Z.setAttribute("src","/src/asset/ol dark.svg"),J.style.setProperty("--dark-text","#f7f7f7"),J.style.setProperty("--back-color","#4e6d89"),J.style.setProperty("--normal-text","#e1e7ee"),J.style.setProperty("--container-color","#4b667e"),_=!0)};const ee=document.getElementById("select-drag");let te;function oe(e){const t=e.clientX,o=e.clientY,n=ee.getBoundingClientRect(),l=t-n.left,s=o-n.top;if(ee.style.width=l+"px",ee.style.height=s+"px",ee.style.display="block",ee.style.zIndex="999",t<te[0]){ee.style.left=t+"px";const e=te[0]-t;ee.style.width=e+"px"}if(o<te[1]){ee.style.top=o+"px";const e=te[1]-o;ee.style.height=e+"px"}document.querySelectorAll(".box").forEach((e=>{n.right>le(e)[0][0]&&n.bottom>le(e)[1][0]&&n.left<le(e)[0][1]&&n.top<le(e)[1][1]&&e.classList.add("selected"),(n.left>le(e)[0][1]||n.right<le(e)[0][0])&&e.classList.remove("selected"),(n.top>le(e)[1][1]||n.bottom<le(e)[1][0])&&e.classList.remove("selected")}))}function ne(){const e=ee.getBoundingClientRect();document.querySelectorAll(".box").forEach((t=>{e.right>le(t)[0][0]&&e.bottom>le(t)[1][0]?e.left<le(t)[0][1]&&e.top<le(t)[1][1]&&t.classList.add("selected"):t.blur()})),ee.style.width="0",ee.style.height="0",ee.style.zIndex="-1",document.removeEventListener("mousemove",oe),document.removeEventListener("mouseup",ne)}function le(e){let t=e.getBoundingClientRect();return[[t.left,t.right],[t.top,t.bottom]]}document.onmousedown=e=>{if("container"==e.target.className&&(te=[e.clientX,e.clientY],0===e.button)){const t=e.clientX,o=e.clientY;ee.getBoundingClientRect(),ee.style.left=t+"px",ee.style.top=o+"px",document.addEventListener("mousemove",oe),document.addEventListener("mouseup",ne)}}})();