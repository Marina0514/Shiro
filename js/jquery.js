$(function() {

    $('.burger-menu').click(function() {
    
    $('.menu-modal').slideDown();
    $('.burger-menu').hide();
    $('.top-wrapper-text').hide();
    $('.close').show();
  });

    $('.close-menu').click(function() {
    $('.menu-modal').slideUp();
    $('.close').hide();
    $('.burger-menu').show();
    $('.top-wrapper-text').show();
  });

})