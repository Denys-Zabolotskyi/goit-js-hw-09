!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n="disabled";t.btnStart.addEventListener("click",(function(o){var r=o.target;if(r.classList.contains(n))return;e(r,t.btnStop,n),a=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(o){if(null===a)return;e(o.target,t.btnStart,n),clearInterval(a)}));var a=null;function e(t,n,a){t.classList.contains(a)||(t.classList.add(a),n.classList.remove(a))}}();
//# sourceMappingURL=01-color-switcher.30ba4332.js.map