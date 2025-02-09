"use strict";

let lang = navigator.language || navigator.userLanguage;
lang = lang.substr(0, 2);

switch (lang) {
    case "en":
        window.location.href = "./index-en.html";
        break;
    case "es":
        window.location.href = "./index-es.html";
        break;
    default:
        window.location.href = "./index-en.html";
        break;
}
