var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");function i(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setInterval((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),delayStep:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]")}).form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(e.target.delay.value),o=Number(e.target.step.value),n=Number(e.target.amount.value);for(let e=1;e<=n;e+=1){i(e,t+o*(e-1)).then((({position:e,delay:t})=>r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((({position:e,delay:t})=>r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)))}}));
//# sourceMappingURL=03-promises.59fde464.js.map
