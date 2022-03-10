

$(document).ready(function () {
  $('.check_box_btn button').on('click', function () {
    $('.check_box_btn button').removeClass("selected");
    $(this).toggleClass("selected");
  });

  $('.more--text').on('click', function () {
    $(this).parent().addClass("show--text");
  });

  $('.less--text').on('click', function () {
    $('.card_text_inner3_top_mob').removeClass("show--text");
  });

  $('.heart--icon').on('click', function () {
    $(this).toggleClass("activee");
  }); 
});







$(document).ready(function () {
  $('.tab_display_inner ul li a').on('click', function () {
    $('.tab_display_inner ul li a').removeClass("active");
    $(this).toggleClass("active");
  });

});


/*************************************/
/*********** OWL Item-1  *************/
/*************************************/

/*
$(document).ready(function() {
 
  var owl = $(".social_area #owl-demo");
 
  owl.owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4, 
      itemsDesktop : [1000,4], 
      itemsDesktopSmall : [900,2.5],
      itemsTablet: [768,2.3], 
      itemsMobile: [500,1.5], 
  });
 
  // Custom Navigation Events
  $(".social_area .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".social_area .prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});
**/


//===== Sticky Menu-Bar Start
$(window).on('scroll', function (event) {
  var scroll = $(window).scrollTop();
  if (scroll < 100) {
    $(".tab_header").removeClass("sticky");
  } else {
    $(".tab_header").addClass("sticky");
  }
});
//===== Sticky Menu-Bar End


$(document).ready(function () {

  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1000, 4], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2.5], // betweem 900px and 601px
    itemsTablet: [768, 2.4], //2 items between 600 and 0
    itemsMobile: [600, 1.5], // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger('owl.next');
  })
  $(".prev").click(function () {
    owl.trigger('owl.prev');
  })
  $(".play").click(function () {
    owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function () {
    owl.trigger('owl.stop');
  })

});

