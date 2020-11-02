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
