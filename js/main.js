var triggerMenu = document.getElementById("trigger-menu");
var menu = document.getElementById("fixed-menu");
var bars = document.getElementById("hamburger-menu-bars");
var teamAccord = document.getElementsByClassName('team-accordion__item');
var menuAccord = document.getElementsByClassName('menu-accordion__item');
var $fon = $(".modal__overlay");
var $fixedMenuLink = $(".fixed-menu__item");
function openMenu() {
    menu.classList.add("fixed-menu_active");
    bars.classList.add("close-menu_bars");
}
function closeMenu(){
    menu.classList.remove("fixed-menu_active");
    bars.classList.remove("close-menu_bars");
}
 triggerMenu.addEventListener('click',function() {
     if(menu.classList.contains("fixed-menu_active")) {
        closeMenu()
     }
     else {
         openMenu()
     }

});
$fixedMenuLink.on("click",function(){
        closeMenu();
 });


for(let i=0;i<teamAccord.length;i++){
    teamAccord[i].addEventListener("click",function(){
        if(!(this.classList.contains('team-accordion__item_active'))) {
            for(var i =0;i<teamAccord.length;i++ ) {
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
            for(var i =0;i<menuAccord.length;i++ ) {
                menuAccord[i].classList.remove("menu-accordion__item_active");
            }
            this.classList.add("menu-accordion__item_active")
        }
        else{
            this.classList.remove("menu-accordion__item_active")
        }
    })
};
$(".reviews__link").on("click",function(e){
   var $this = $(e.currentTarget);
    e.preventDefault();
    $this.parent().css({
      "opacity":1,
      "visibility":"visible"
    });
    $fon.fadeIn(1000,function(){
        $this.parent().next().fadeIn(1000)
    })
});
$(".modal__close-button").on("click",function(e){
  var  $this = $(e.currentTarget);
    e.preventDefault();
    $this.parent().fadeOut(1000,()=>{
        $fon.fadeOut(1000, ()=>{
            $this.parent().prev().attr('style',"");
        });
    });
 });
var slider = new Swiper ('.swiper-container', {
    loop:true,
    speed:300,
    spaceBetween:20,
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
    easing: "swing",
    });
$(".intro__arrow").on("click",function() {
    $.fn.fullpage.moveSectionDown();
});

if($(document).width() <= 768){
    $(".composition").on("click",function(){
        var $this = $(this);
        $this.css("background","#e35028");
        $this.find(".composition-table").fadeIn(1000);
    })
}
$(".composition__close").on("click",function(e){
   var $this = $(this);
    e.stopPropagation();
    $this.closest(".composition-table").fadeOut(1000,function (){
       $(this).closest(".composition").attr("style","")
    })

});