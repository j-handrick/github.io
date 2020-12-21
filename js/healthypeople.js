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
//Image Modal: 5
$("#pop5").on("click", function() {
  $('#imagepreview5').attr('src', $('#imageresource5').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal5').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
//Image Modal: 6
$("#pop4").on("click", function() {
  $('#imagepreview6').attr('src', $('#imageresource6').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal6').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
//Image Modal: 7
$("#pop4").on("click", function() {
  $('#imagepreview7').attr('src', $('#imageresource7').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal7').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});
//Image Modal: 8
$("#pop4").on("click", function() {
  $('#imagepreview8').attr('src', $('#imageresource8').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal8').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

//MODULE SLIDE-INS 
(function ($) {
  $.fn.visible = function(partial) {
      
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
  })(jQuery);
  
  $(window).scroll(function(event) {
    
    $(".module").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

  // CHANGE BACKGROUND COLOR ON SCROLL

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() >= $("#WhatWhy").position().top - 300 ) {
    $('body').css('background', $("#WhatWhy").attr("data-color"));
  };

  if ($(document).scrollTop() > $("#problemstatement").position().top - 300) {
    $('body').css('background', $("#problemstatement").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#userresearch").position().top - 300) {
    $('body').css('background', $("#userresearch").attr("data-color"))
  };
  
  if ($(document).scrollTop() > $("#wireframes").position().top - 300) {
    $('body').css('background', $("#wireframes").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#responsiveprototypes").position().top - 300) {
    $('body').css('background', $("#responsiveprototypes").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#conclusion").position().top - 500) {
    $('body').css('background', $("#conclusion").attr("data-color"))
  };
});