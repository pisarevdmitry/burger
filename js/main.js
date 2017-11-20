var triggerMenu = document.getElementById("trigger-menu");
var menu = document.getElementById("fixed-menu");
var bars = document.getElementById("hamburger-menu-bars");
var teamAccord = document.getElementsByClassName('team-accordion');
var menuAccord = document.getElementsByClassName('menu-accordion');
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
function accord(container,target){
    var className= container.className;
    var items = container.getElementsByClassName(className + '__item');
    var $this = target.parentNode.classList.contains(className + "__item") ? target.parentNode : target.parentNode.parentNode ;
     if ($this.classList.contains(className + '__item')) {
        if (!($this.classList.contains(className + '__item_active'))) {
            for(var i =0;i<items.length;i++ ) {
                items[i].classList.remove(className+"__item_active");
            }
            $this.classList.add(className + "__item_active")
        }
        else {
            $this.classList.remove(className+ "__item_active")
        }
    }
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
teamAccord[0].addEventListener("click",function (e) {
    accord(teamAccord[0],e.target)

});

menuAccord[0].addEventListener("click",function (e) {
    accord(menuAccord[0],e.target)
   });

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

$(".composition").on("click",function(){
    if($(document).width() <= 768){
        var $this = $(this);
        $this.css("background","#e35028");
        $this.find(".composition-table").fadeIn(1000);}
    });

$(".composition__close").on("click",function(e){
   var $this = $(this);
    e.stopPropagation();
    $this.closest(".composition-table").fadeOut(1000,function (){

       $(this).attr("style","").closest(".composition").attr("style","")
    })

});
ymaps.ready(function () {
    

    var myMap = new ymaps.Map("map", {
        center: [59.937081158544665,30.317735166318073],
        zoom: 12
    });
    myMap.behaviors.disable('scrollZoom');

    var myPlacemark1 = new ymaps.Placemark([59.913689433600794,30.46144653027338], {}, {
    iconLayout: 'default#image',
    iconImageHref: "img/svg/map-marker.svg",
    iconImageSize: [46, 57],

    });
    var myPlacemark2 = new ymaps.Placemark([59.94825425012653,30.385530116618575], {}, {
        iconLayout: 'default#image',
        iconImageHref: "img/svg/map-marker.svg",
        iconImageSize: [46, 57],

    });
    var myPlacemark3 = new ymaps.Placemark([59.97616528471932,30.309495420224334], {}, {
        iconLayout: 'default#image',
        iconImageHref: "img/svg/map-marker.svg",
        iconImageSize: [46, 57],

    });
    var myPlacemark4 = new ymaps.Placemark([59.89406615032591,30.307665379964558], {}, {
        iconLayout: 'default#image',
        iconImageHref: "img/svg/map-marker.svg",
        iconImageSize: [46, 57],

    });
myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)
    .add(myPlacemark4);
});