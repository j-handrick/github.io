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
