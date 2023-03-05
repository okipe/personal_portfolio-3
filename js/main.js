const nav = document.querySelector("#navbar");
const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");
const menuItems = document.querySelectorAll('.navbar__menu__item');

openNav.addEventListener("click", () => {
    nav.classList.add("visible");
})

closeNav.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// document.addEventListener('click', function(event) {
//     if(!event.target.closest('#navbar') && !event.target.matches('#navbar')) {
//         nav.classList.remove("visible");
//     }
// });



menuItems.forEach(function(menuItems) {
    menuItems.addEventListener('click', function() {
        nav.classList.remove("visible");
    });
});

//This is for disappearing when a click is done outside the menu

document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !openNav.contains(event.target)) {
        nav.classList.remove("visible");
    }
});