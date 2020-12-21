$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() >= $("#hero").position().top ) {
      $('body').css('background', $("#hero").attr("data-color"));
    };
  
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