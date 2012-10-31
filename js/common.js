$(document).ready(function(){
// cycle 
 $('.scroll').cycle({ 
    fx:     'fade',
    timeout: 5000,
    speed: 700
});

$(".popup").hide();
$(".popup-wrap").hide();
$(".header__contacts a").click(function(){
    $(".popup-wrap").fadeIn();
    $(".popup_feedback").fadeIn();
    return false;
});
$(".btn-new-site").click(function(){
    $(".popup-wrap").fadeIn();
    $(".popup_order").fadeIn();
    return false;
});
$(".popup-wrap, .popup__close").click(function(){
    $(".popup-wrap").fadeOut();
    $(".popup").fadeOut();

});

})