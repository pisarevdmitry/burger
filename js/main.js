let triggerMenu = document.getElementById("trigger-menu");
let menu = document.getElementById("fixed-menu");
let logo = document.getElementById("logo");
let bars = document.getElementById("hamburger-menu-bars");

console.log(menu);
 triggerMenu.addEventListener('click',function() {
   menu.classList.toggle("fixed-menu_active");
   logo.classList.toggle('logo_fixed');
   triggerMenu.classList.toggle('close-menu');
   bars.classList.toggle("close-menu_bars")
});