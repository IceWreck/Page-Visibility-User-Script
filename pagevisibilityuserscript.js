// ==UserScript==
// @name        PreventPageVisibility 
// @namespace   https://github.com/IceWreck
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      IceWreck
// @description 9/16/2020, 12:27:16 AM
// ==/UserScript==

for (event_name of ["visibilitychange", "webkitvisibilitychange", "blur"]) {
  window.addEventListener(event_name, function(event) {
        event.stopImmediatePropagation();
    }, true);
}

document.hasFocus = function () {return true;};
window.onfocus = null;
window.onblur = null;
document.onvisibilitychange = null;
Object.defineProperty(document, "hidden", { value : false});
Object.defineProperty(document, "visibilityState", { value : "visible"});
Object.defineProperty(document, "webkitVisibilityState", { value : "visible"});
