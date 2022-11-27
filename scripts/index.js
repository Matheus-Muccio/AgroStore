
const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.btnMenu-open');
const closeMenu = document.querySelector('.btnMenuclose');

btnMenuOpen.addEventListener("click", function() {
    menu.classList.add("menu_open");    
})

closeMenu.addEventListener("click", function(){
    menu.classList.remove("menu_open");
 
})



