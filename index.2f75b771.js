!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("3SEMc"),l=(r=t("3SEMc"),r=t("3SEMc"),(0,(r=t("3SEMc")).getAuth)());(0,r.onAuthStateChanged)(l,(function(e){if(console.log("onAuthStateChanged ~ user",e),e){console.log("User logged in: ",e);e.uid}else console.log("User logged out")}));var a=document.querySelector("#signup-form");a.addEventListener("submit",(function(e){e.preventDefault();var o=a["signup-email"].value,n=a["signup-password"].value;console.log(o,n);var t=(0,r.getAuth)();(0,r.createUserWithEmailAndPassword)(t,o,n).then((function(e){var o=e.user;console.log("user",o);var n=document.querySelector("#modal-signup");M.Modal.getInstance(n).close(),a.reset()})).catch((function(e){e.code,e.message}))})),document.querySelector("#logout").addEventListener("click",(function(e){e.preventDefault();var o=(0,r.getAuth)();(0,r.signOut)(o).then()}));var u=document.querySelector("#login-form");u.addEventListener("submit",(function(e){e.preventDefault();var o=u["login-email"].value,n=u["login-password"].value,t=(0,r.getAuth)();(0,r.signInWithEmailAndPassword)(t,o,n).then((function(e){e.user;var o=document.querySelector("#modal-login");M.Modal.getInstance(o).close(),u.reset()})).catch((function(e){var o=e.code;console.log("errorCode",o);var n=e.message;console.log("errorMessage",n)}))}))}();
//# sourceMappingURL=index.2f75b771.js.map