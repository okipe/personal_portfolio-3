/* LANGUAGE SELECTOR */
var dropdown = document.querySelector('.language-dropdown');

// Evento click para mostrar y ocultar
dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.querySelector('.language-menu').classList.toggle('show');
});
  
// Ocultar menú desplegable al hacer clic fuera
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.querySelectorAll('.navbar__menu-dropdown');
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });
    }
};

/* MOBILE MENU */

const nav = document.querySelector("#navbar");
const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");
const menuItems = document.querySelectorAll('.navbar__menu__item');

openNav.addEventListener("click", () => {
    nav.classList.add("visible");
});

closeNav.addEventListener("click", () => {
    nav.classList.remove("visible");
});

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
        let targetElement = event.target; // clicked element

        do {
            if (targetElement == menuItem && targetElement.parentElement.classList.contains('language-dropdown')) {
                // This is a click inside the language dropdown, so just return and do nothing.
                return;
            }
            // Go up the DOM.
            targetElement = targetElement.parentNode;
        } while (targetElement);

        // This is a click outside the language dropdown, so close the menu.
        nav.classList.remove("visible");
    });
});

//This is for disappearing when a click is done outside the menu
document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !openNav.contains(event.target)) {
        nav.classList.remove("visible");
    }
});
