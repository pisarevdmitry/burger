let triggerMenu = document.getElementById("trigger-menu");
let menu = document.getElementById("fixed-menu");
let bars = document.getElementById("hamburger-menu-bars");
let teamAccord = document.getElementsByClassName('team-accordion__item');
let menuAccord = document.getElementsByClassName('menu-accordion__item');

 triggerMenu.addEventListener('click',function() {
     if(menu.classList.contains("fixed-menu_active")){
         menu.classList.remove("fixed-menu_active");

     }else{
        menu.classList.add("fixed-menu_active");
     }
     if(bars.classList.contains("close-menu_bars")){
         bars.classList.remove("close-menu_bars");

     }else{
         bars.classList.add("close-menu_bars");
     }

});

for(let i=0;i<teamAccord.length;i++){
    teamAccord[i].addEventListener("click",function(){
        if(!(this.classList.contains('team-accordion__item_active'))) {
            for(let i =0;i<teamAccord.length;i++ ) {
               teamAccord[i].classList.remove("team-accordion__item_active");
            }
            this.classList.add("team-accordion__item_active")
        }
        else{
            this.classList.remove("team-accordion__item_active")
        }
    })
}
for(let i=0;i<menuAccord.length;i++){
    menuAccord[i].addEventListener("click",function(){
        if(!(this.classList.contains('menu-accordion__item_active'))) {
            for(let i =0;i<menuAccord.length;i++ ) {
                menuAccord[i].classList.remove("menu-accordion__item_active");
            }
            this.classList.add("menu-accordion__item_active")
        }
        else{
            this.classList.remove("menu-accordion__item_active")
        }
    })
}