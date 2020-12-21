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

// Background Magic 
(function() {

  let magic = document.querySelector('.magic');
  let magicWHalf = magic.offsetWidth / 2;

  document.body.addEventListener('mousemove',function(e){
    magic.style.left = e.pageX - magicWHalf+'px';
    magic.style.top = e.pageY - magicWHalf+'px';
  });

  document.body.addEventListener('mouseout',function(e){
    //magic.style.left = 'calc(50% - 10rem)';
    //magic.style.top = 'calc(50% - 10rem)';
  });

})();
