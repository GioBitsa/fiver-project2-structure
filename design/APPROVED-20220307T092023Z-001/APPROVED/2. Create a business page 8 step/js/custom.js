

$(document).ready(function() {
    $('.check_box_btn button').on('click', function() {
      $('.check_box_btn button').removeClass("selected");
      $(this).toggleClass("selected"); 
    });

});







$(document).ready(function() {
    $('.page6_input_inner_right').on('hover', function() {
      $('.page6_input_inner_right').removeClass("active");
      $(this).toggleClass("active"); 
    });

});
