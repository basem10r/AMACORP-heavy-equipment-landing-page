$(document).ready(function(){

 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      autoplay : true,
      items : 6, //10 items above 1000px browser width
      margin:20,
      responsiveClass:true,
      responsive:{
        0:{
              items:1,
            loop:true,
            margin:30
        },
        300:{
            items:1,
            loop:true,
            margin:30
        },
        600:{
            items:1,
            loop:true,
            margin:30
        },
        
        800:{
            items:2,
            loop:true
        },
        1200:{
            items:2,
            loop:true
        }
      }
      // itemsMobile disabled - inherit from itemsTablet option
  });
  // Custom Navigation Events














    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.dropdown-toggle').dropdown();


    $(".timer").countTo();
});