'use strict'
//Sticky Menu
/*window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})*/

//Login (Popup)
function menuToggle(){
    const toggleMenu = document.querySelector('form');
    toggleMenu.classList.toggle('active');
}

//Register (Popup)
function registerToggle(){
    const toggleRegister = document.querySelector('.form2');
    toggleRegister.classList.toggle('active2');
}

//Cerrar ventanas flotantes con click fuera
$(document).ready(function(){
    $("html").click(function (e) {
        if(e.target.id != "mantener" && e.target.id !="form"){
            // Contenido
            $('.active').removeClass('active');
        }
        if(e.target.id != "mantener2" && e.target.id !="form"){
            // Contenido
            $('.active2').removeClass('active2');
        }
    });
});
