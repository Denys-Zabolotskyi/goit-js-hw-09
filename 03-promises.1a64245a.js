!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setInterval((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),delayStep:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]")}).form.addEventListener("submit",(function(e){e.preventDefault();for(var t=Number(e.target.delay.value),n=Number(e.target.step.value),o=Number(e.target.amount.value),i=1;i<=o;i+=1){a(i,t+n*(i-1)).then((function(e){var t=e.position,n=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.1a64245a.js.map