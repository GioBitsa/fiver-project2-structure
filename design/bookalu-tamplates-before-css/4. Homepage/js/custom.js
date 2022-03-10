

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



/*************************************/
/*********** OWL Item-1  *************/
/*************************************/


$(document).ready(function() {
 
  var owl = $(".top_gallery_area #owl-demo");
 
  owl.owlCarousel({
	  /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
      items : 7, 
      itemsDesktop : [1000,7], 
      itemsDesktopSmall : [900,5],
      itemsTablet: [768,5], 
      itemsMobile: [500,4], 
  });
 
  // Custom Navigation Events
  $(".top_gallery_area .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".top_gallery_area .prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});


/*************************************/
/*********** OWL Item-2  *************/
/*************************************/


$(document).ready(function() {
 
  var owl = $(".favourites_area #owl-demo");
 
  owl.owlCarousel({
	  /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
      items : 3, 
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [991,2],
      itemsTablet: [768,2], 
      itemsTabletSmall: [750,2], 
      itemsMobile: [575,1.2], 
  });
 
  // Custom Navigation Events
  $(".favourites_area .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".favourites_area .prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});



/*************************************/
/*********** OWL Item-3  *************/
/*************************************/


$(document).ready(function() {
 
  var owl = $(".toprated_area #owl-demo");
 
  owl.owlCarousel({
	  /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
      items : 3, 
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [991,2],
      itemsTablet: [768,2], 
      itemsTabletSmall: [750,2], 
      itemsMobile: [575,1.2], 
  });
 
  // Custom Navigation Events
  $(".toprated_area .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".toprated_area .prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});

/*************************************/
/*********** OWL Item-4  *************/
/*************************************/

$(document).ready(function() {
 
  var owl = $(".special_area #owl-demo");
 
  owl.owlCarousel({
	  /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
      items : 3, 
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [991,2],
      itemsTablet: [768,2], 
      itemsTabletSmall: [750,2], 
      itemsMobile: [575,1.2], 
  });
 
  // Custom Navigation Events
  $(".special_area .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".special_area .prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});


/*************************************/
/*********** OWL Item-5  *************/
/*************************************/

$(document).ready(function() {
 
  var owl = $(".new_area #owl-demo");
 
  owl.owlCarousel({
	  /*autoPlay: 3000, //Set AutoPlay to 3 seconds*/
      items : 3, 
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [991,2],
      itemsTablet: [768,2], 
      itemsTabletSmall: [750,2], 
      itemsMobile: [575,1.2], 
  });
 
  // Custom Navigation Events
  $(".new_area .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".new_area .prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});
































