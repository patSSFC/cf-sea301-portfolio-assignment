var projectView = {};

projectView.handleNav = function() {
  $('.nav-links').on('click', function(event){
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(500);
  });

  $('.nav-links:last').click();
};

projectView.handleNav();
