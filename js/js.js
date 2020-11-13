//SMOOTH scroll
$(window).scroll(function(){
console.log('scroll');
if($(this).scrollTop() > 100) {
      $("#dissapear").addClass('active');
console.log("addActive")
} else {
    $("#dissapear").removeClass('active');
  console.log("removeActive")
}
});

//NAV DISSAPEAR ON SCROLL
// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

//CARD DROP SHADOW
$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
  $( ".card" ).hover(
  function() {
    $(this).addClass('shadow-sm').css('cursor', 'pointer');
  }, function() {
    $(this).removeClass('shadow-sm');
  }
);
// document ready
});

//Image Modals: 
$("#pop").on("click", function() {
  $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
