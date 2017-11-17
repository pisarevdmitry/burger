let triggerMenu = document.getElementById("trigger-menu");
let menu = document.getElementById("fixed-menu");
let bars = document.getElementById("hamburger-menu-bars");
let teamAccord = document.getElementsByClassName('team-accordion__item');
let menuAccord = document.getElementsByClassName('menu-accordion__item');
let $fon = $(".modal__overlay");

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
};
$(".reviews__link").on("click",(e) =>{
   let $this = $(e.currentTarget);
    e.preventDefault();
    $this.parent().css({
      "opacity":1,
      "visibility":"visible"
    });
    $fon.fadeIn(1000,()=>{
        $this.parent().next().fadeIn(1000)
    })
});
$(".modal__close-button").on("click",(e)=>{
  let  $this = $(e.currentTarget);
    e.preventDefault();
    $this.parent().fadeOut(1000,()=>{
        $fon.fadeOut(1000, ()=>{
            $this.parent().prev().attr('style',"");
        });
    });
 });
let slider = new Swiper ('.swiper-container', {
    loop:true,
    speed:1000,
    navigation: {
        nextEl: '.slider__arrow_right',
        prevEl: '.slider__arrow_left',
    }

});
$("#fullpage").fullpage({
    verticalCentered:false,
    menu:"#page-controls",
    anchors:["intro","advantages","slider","section-team","menu","reviews","form","section-map"],
    css3: false,
    scrollingSpeed: 1000,
    easing: "swing"
});