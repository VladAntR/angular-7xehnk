/*
    TABS
*/

$('.card').on('click', function(){
    //console.log($(this));//Shows the card the user click on
    //$(this).parent().index()//Get  the index of the item I clicked
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');//eq returns an object at a given index  

});

/* HUMBURGER MENU */

$('.hamburger').on('click', function(){
    $('.head__menu').toggle();
});

$('.menu-close').on('click', function(){
    $('.head__menu').hide();
});

/* PARALLAX */

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

/* SLIDER */

const swiper = new Swiper('.swiper-container',{
    direction:'horizontal',//and is vertical
    spaceBetween:50,
    slidesPerView : 3,
    loop:true,
    stopOnLastSlide:false,
    autoplay:{
        delay:2000
    } 


    /*
    //Navigation arrows
    navigation:{
        nextEl:'.swiper-button-next',
        prevEL:'.swiper-button-prev',
    },

    //And if we need scrollbar
    scrollbat:{
        el: '.swiper-scrollbar',
    },
    */
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map",{
        center:[55.76, 37.64],
        zoom:7,
        controls:['zoomControl', 'geolocationControl'],
    });
};

/*Validation */

//REDAX
$.validator.addMethod('regex', function(value,element, regexp){
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
}, 'Please chech your input');


$('form').validate({
    rules:{
        firstName:{
            required:true,
            regex: "[A-Za-z]{1,32}"
        },
        phoneNumeber : {
            digits:true,
            required:true,
            minlength:10,
            maxlength:11,
            regex:"[0-9]+"
        }
    },
    message : {
        firstName : 'Enter name incorrect',
        phoneNumeber: 'Enter your number'
    }
})

