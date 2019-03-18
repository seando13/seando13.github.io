$(document).ready(function () {
  console.log(`Is there anybody out there?`);

  $('body').addClass('fade-in');

  $('#home').click(function () {
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 'slow');
  });

  $('#projects').click(function () {
    $('html, body').animate({
      scrollTop: $('#js-projects').offset().top
    }, 'slow');
  });

  $('#skills').click(function () {
    $('html, body').animate({
      scrollTop: $(".white-container").offset().top
    }, 'slow');
  })

});
