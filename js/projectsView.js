var projectView = {};

projectView.handleNav = function() {
  $('.nav-links').on('click', function(event){
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(500);
  });

  $('.nav-links:last').click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();

  $('#projects').on('click', '.read-on', function(e){
    e.preventDefault();
    if ($(this).hasClass('read-on')) {
      $(this).parentsUntil('article').find('.project-body').children().show();
      $(this).hide();
    }
  });
};

projectView.navHover = function() {
  //TODO -- apply / remove selected class so the selected button applies
  $('.nav-links').on('mouseover', function(e) {
    $(e.target).children().addClass('white-text');
    $(e.target).children().removeClass('purple-text');
  });

  $('.nav-links').on('mouseleave', function(e){
    $(e.target).children().addClass('purple-text');
    $(e.target).children().removeClass('white-text');
  });
};

projectView.handleNav();
projectView.setTeasers();
projectView.navHover();
