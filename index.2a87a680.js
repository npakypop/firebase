!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("3SEMc"),u=(r=o("3SEMc"),document.querySelector("#signup-form"));u.addEventListener("submit",(function(e){e.preventDefault();var n=u["signup-email"].value,t=u["signup-password"].value,o=(0,r.getAuth)();(0,r.createUserWithEmailAndPassword)(o,n,t).then((function(e){var n=e.user;console.log("user",n);var t=document.querySelector("#modal-signup");M.Modal.getInstance(t).close(),u.reset()})).catch((function(e){e.code,e.message}))})),document.querySelector("#logout").addEventListener("click",(function(e){e.preventDefault();var n=(0,r.getAuth)();(0,r.signOut)(n).then((function(){return console.log("sign out")}))}))}();
//# sourceMappingURL=index.2a87a680.js.map
