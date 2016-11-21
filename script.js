// scroll

$(document).ready(function() { 
 
 $('a[href^="#"]').on('click', function(event) {
 
 var target = $( $(this).attr('href') );
 
 if( target.length ) {
 event.preventDefault();
 $('html, body').animate({
 scrollTop: target.offset().top
 }, 1000);
 }
 });
});

// menu for mobiles
$(document).ready(function(){ 
$("#fixed-nav-menu").hide();


 $("#mobile-button i").click(function() { 
    $("#fixed-nav-menu").fadeIn("slow");
});

 $("#fixed-nav-menu li a").click(function() { 
      $("#fixed-nav-menu").fadeOut("slow"); 
    });
 });
