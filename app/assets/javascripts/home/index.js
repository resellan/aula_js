$(document).ready(function(){
  $(".btn_red").mouseenter(function() {
    $(".title").removeClass("green_title")
    $(".title").removeClass("blue_title")
    $(".title").addClass("red_title")
  });

  $(".btn_green").mouseenter(function() {
    $(".title").removeClass("red_title")
    $(".title").removeClass("blue_title")
    $(".title").addClass("green_title")
  });

  $(".btn_blue").mouseenter(function() {
    $(".title").removeClass("green_title")
    $(".title").removeClass("red_title")
    $(".title").addClass("blue_title")
  });

  $(".btn_size").click(function() {
    if($(this).hasClass("btn_min")) {
      size = minTitle()
    } else if ($(this).hasClass("btn_plus")) {
      size = plusTitle()
    }
    $(".title").css({ 'font-size': size });
  });

});
function minTitle() {
  current_size = $(".title").css('font-size');
  next_size = parseInt(current_size)-10;
  if(next_size < 10){
    next_size = 10
  }
  return next_size+"px"
}

function plusTitle() {
  current_size = $(".title").css('font-size');
  next_size = parseInt(current_size)+10;
  if(next_size > 70){
    next_size = 70
  }
  return next_size+"px"
}
