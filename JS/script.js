'use strict';

/** Menu **/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const header = document.querySelector("[data-header]");

navToggler.addEventListener("click", () => navbar.classList.toggle("active"));
window.addEventListener("scroll", Event => {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/** Button Favorite **/

const toggleBtns = document.querySelectorAll("[data-toggle-btn]");

toggleBtns.forEach(toggleBtns => {
    toggleBtns.addEventListener("click", () => {
        toggleBtns.classList.toggle("active");
        Toastify({
            text: "Essa funcionalidade está em manutenção!",
            duration: 3000,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "var(--error-100)",
            },
        }).showToast();
    })
});

/** Close Menu **/

const navbarMenu = document.querySelector(".navbar");

navbarMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});

/** Notifications **/

const buttonSearch = document.querySelector("#button-search");
const navbarFavorite = document.querySelector("#navbar-favorite");
const footerFavorite = document.querySelector("#footer-favorite");

buttonSearch.addEventListener("click", () => {
    Toastify({
        text: "Essa funcionalidade está em manutenção!",
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "var(--error-100)",
        },
    }).showToast();
});

navbarFavorite.addEventListener("click", () => {
    Toastify({
        text: "Essa funcionalidade está em manutenção!",
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "var(--error-100)",
        },
    }).showToast();
});

footerFavorite.addEventListener("click", () => {
    Toastify({
        text: "Essa funcionalidade está em manutenção!",
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "var(--error-100)",
        },
    }).showToast();
});