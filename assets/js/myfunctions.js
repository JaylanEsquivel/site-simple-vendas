$(document).ready(function() {

    window.onscroll = function() {scrollFunction()};

});

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {


    $(".navbar").css("position","fixed");
    $(".navbar").css("width","100%");


  } else {
    $(".navbar").css("position","relative");
    $(".navbar").css("width","100%");
  }
}

