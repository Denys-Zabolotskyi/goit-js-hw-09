!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n="disabled";t.btnStart.addEventListener("click",(function(a){var r=a.target;if(r.classList.contains(n))return;e(r,t.btnStop,n),o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log("start")})),t.btnStop.addEventListener("click",(function(a){if(null===o)return;e(a.target,t.btnStart,n),clearInterval(o),console.log("stop")}));var o=null;function e(t,n,o){t.classList.contains(o)||(t.classList.add(o),n.classList.remove(o))}}();
//# sourceMappingURL=01-color-switcher.b49c4e4e.js.map
