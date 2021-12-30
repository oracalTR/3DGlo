(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds"),s=setInterval((()=>{let e=(new Date("01 January 2022").getTime()-(new Date).getTime())/1e3,l=Math.floor(e/60/60),c=Math.floor(e/60%60),r=Math.floor(e%60);e>0?(t.textContent=l<10?"0"+l:l,o.textContent=c<10?"0"+c:c,a.textContent=r<10?"0"+r:r):clearInterval(s)}),1e3)})(),(()=>{document.querySelector(".menu");const e=document.querySelector("menu"),t=()=>e.classList.toggle("active-menu");document.addEventListener("click",(o=>{let a=o.target;e.classList.contains("active-menu")&&!a.closest(".active-menu")&&t(),a.closest(".menu")&&t(),(a.classList.contains("close-btn")||a.matches("ul>li>a"))&&t()}))})(),(()=>{const e=document.querySelector(".service"),t=document.querySelector(".popup");e.addEventListener("click",(e=>{if(e.target.classList.contains("popup-btn")){let e,o=0;if(t.style.opacity=0,t.style.display="block",document.documentElement.clientWidth<768)t.style.opacity=1;else{let a=()=>{o+=.03,e=requestAnimationFrame(a),o<1?t.style.opacity=o:cancelAnimationFrame(e)};a()}}t.addEventListener("click",(e=>{let o=e.target;(o.classList.contains("popup")||o.classList.contains("popup-close"))&&(t.style.display="none")}))}))})(),(()=>{document.querySelectorAll("form");const e=document.querySelectorAll(".form-btn"),t=document.querySelectorAll("input[name=user_name]"),o=document.querySelectorAll("input[name=user_email]"),a=document.querySelectorAll("input[name=user_phone]"),s=document.querySelectorAll("input.calc-item"),l=document.querySelector(".mess");let c=/\D/g,r=!0;t.forEach((e=>{e.addEventListener("input",(e=>{var t;t=e.target.value,/([^а-я-\s]+)/gi.test(t)?(r=!0,e.target.style.backgroundColor="#FF7F50"):(r=!1,e.target.style.backgroundColor="#fff")}))})),a.forEach((e=>{e.addEventListener("input",(e=>{let t="";var o;/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2}$)/g.test(e.target.value)&&(t=e.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g,((e,t,o,a,s,l)=>{let c="";return c=`${t}(${o})${a}-${s}-${l}`,c})),e.target.value=t),o=e.target.value,/^\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/g.test(o)?(r=!1,e.target.style.backgroundColor="#fff"):(r=!0,e.target.style.backgroundColor="#FF7F50")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{var t;t=e.target.value,/^([a-z0-9_~'*!-]+\.)*[a-z0-9_~'*!-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g.test(t)?(r=!1,e.target.style.backgroundColor="#fff"):(r=!0,e.target.style.backgroundColor="#FF7F50")}))})),l.addEventListener("input",(e=>{var t;t=e.target.value,/([^а-я-,\s]+)/gi.test(t)?(r=!0,e.target.style.backgroundColor="#FF7F50"):(r=!1,e.target.style.backgroundColor="#fff")})),e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r||console.log("Отправка формы")}))})),s.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(c,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let a=e.target.closest(".service-header-tab");a&&t.forEach(((e,t)=>{e==a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}))})(),(()=>{const e=document.querySelector("#all-progects"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");for(let e=0;e<t.length;e++){const t=document.createElement("li");t.classList.add("dot"),0==e&&t.classList.add("dot-active"),o.insertAdjacentElement("beforeend",t)}const a=document.querySelectorAll(".dot");let s,l=0;const c=()=>{l==t.length-1?(a[l].classList.remove("dot-active"),t[l].classList.remove("portfolio-item-active"),l=0,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active")):(t[l].classList.remove("portfolio-item-active"),a[l].classList.remove("dot-active"),l++,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active"))},r=()=>{clearInterval(s)},n=()=>{s=setInterval(c,2500)};e.addEventListener("click",(e=>{e.preventDefault();let o=e.target;o.classList.contains("prev")?(r(),t[l].classList.remove("portfolio-item-active"),a[l].classList.remove("dot-active"),0==l?(l=t.length-1,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active")):(l--,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active")),n()):o.classList.contains("next")?(r(),t[l].classList.remove("portfolio-item-active"),a[l].classList.remove("dot-active"),l==t.length-1?(l=0,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active")):(l++,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active")),n()):o.classList.contains("dot")&&(e=>{r(),a.forEach(((o,s)=>{e==o&&(t[l].classList.remove("portfolio-item-active"),a[l].classList.remove("dot-active"),l=s,t[l].classList.add("portfolio-item-active"),a[l].classList.add("dot-active"),n())}))})(o)})),e.addEventListener("mouseenter",(e=>{e.preventDefault();let t=e.target;(t.classList.contains("prev")||t.classList.contains("next")||t.classList.contains("dot"))&&(console.log("Стоп сладер"),r())}),!0),e.addEventListener("mouseleave",(e=>{e.preventDefault();let t=e.target;(t.classList.contains("prev")||t.classList.contains("next")||t.classList.contains("dot"))&&(console.log("Старт сладер"),r(),n())}),!0),n()})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=t.querySelector(".calc-type"),a=t.querySelector(".calc-square"),s=t.querySelector(".calc-count"),l=t.querySelector(".calc-day"),c=t.querySelector("#total");let r,n=0;t.addEventListener("input",(t=>{let i=t.target;i!==o&&i!==a&&i!==s&&i!==l||(clearInterval(r),(e=>{let t=1,i=1,d=1;if(+s.value>1)for(let e=0;e<+s.value;e++)i+=.1;l.value&&+l.value<5?d=2:l.value&&+l.value<10&&(d=1.5),console.dir(o),o.options[o.selectedIndex].dataset.price&&(e=o.options[o.selectedIndex].dataset.price),t=o.options[o.selectedIndex].value,n=Math.round(e*+t*+a.value*i*d),console.log(e),console.log("calcTypeCoeff: ",t),console.log("calcCountCoeff: ",i),console.log("calcDayCoeff: ",d),console.log("totalPrice: ",n),n&&(()=>{let e=0;r=setInterval((()=>{c.textContent=e,e>=n?(c.textContent=n,clearInterval(r)):e+=111}),5)})()})(e))}))})(100)})();