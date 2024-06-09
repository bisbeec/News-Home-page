$(document).ready(function() { 

    $(".hamburger").click(function() {
      $(".header-nav").addClass("mobile-nav-show");
      $("body").addClass("show-overlay");
    });

    $(".close-x").click(function() {
      $(".header-nav").removeClass("mobile-nav-show");
      $("body").removeClass("show-overlay");
    });


}); 

  