//Nav dissapear on scroll
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

//Image Modal: 1
$("#pop").on("click", function() {
  $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
//Image Modal: 2
$("#pop2").on("click", function() {
  $('#imagepreview2').attr('src', $('#imageresource2').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal2').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
//Image Modal: 3
$("#pop3").on("click", function() {
  $('#imagepreview3').attr('src', $('#imageresource3').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal3').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
//Image Modal: 4
$("#pop4").on("click", function() {
  $('#imagepreview4').attr('src', $('#imageresource4').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal4').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
