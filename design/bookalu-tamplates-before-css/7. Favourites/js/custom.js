

$(document).ready(function() {
    $('.check_box_btn button').on('click', function() {
      $('.check_box_btn button').removeClass("selected");
      $(this).toggleClass("selected"); 
    });

});







$(document).ready(function() {
    $('.tab_display_inner ul li a').on('click', function() {
      $('.tab_display_inner ul li a').removeClass("active");
      $(this).toggleClass("active"); 
    });

});
