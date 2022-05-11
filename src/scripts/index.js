import '../styles/index.scss';
import $ from "jquery";


$(function() {
  $('#card1').click(function() {
    $('#card1').toggleClass('card-selected');
    $(".card-disabled").removeClass("card-selected");
  });

  $('#card2').click(function() {
    $('#card2').toggleClass('card-selected').toggleClass('card-default');
  });
});


$(".card-selected").mouseleave(function(){
  $(".card-selected .card__label").css({'color': '#e62e7a', 'transition-delay' : '0.7s'});
});
$(".card-selected").mouseover(function(){
  $(".card-selected .card__label").css({'color': '#666666'});
});
