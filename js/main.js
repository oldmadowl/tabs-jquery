$(function(){


  $('.tabs__btn').on('click', function(e){
    e.preventDefault(); //turns off links

    $('.tabs__btn').removeClass('active'); //necessary only if you want some style effects for your buttons when the tab is opened
    $('.tabs__item').removeClass('active');

    $(this).addClass('active'); //necessary only if you want some style effects for your buttons when the tab is opened
    $($(this).attr('href')).addClass('active');
  });
  


});