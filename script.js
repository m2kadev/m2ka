$(document).ready(function () {


    $(window).bind('scroll', function () {

        var gap = 600;
        if ($(window).scrollTop() > gap) {
            $('.navbar').addClass('navbg');
        } else {
            $('.navbar').removeClass('navbg');
        }

    });

    /*
    $('.nav-icon').clickToggle(function(){
        $('.nav-icon .line1').css({"transform": "rotate(45deg)"});

    })*/

});



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

let childs = document.getElementById('childs');

function showChilds() {

    
    

    if (childs.classList.contains('show-childs')) {
        childs.classList.remove('show-childs');
    }else {
        childs.classList.add('show-childs');
    } 
}