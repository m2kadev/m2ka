let openNav = document.getElementById('openNav');
let closeNav = document.getElementById('closeNav');
let navBar = document.querySelector('.nav-navbar');

function openNavbar() {
    navBar.style.width = "300px";
    closeNav.style.display = "block";
}

function closeNavbar() {
    navBar.style.width = "0";
    closeNav.style.display = "none";
}