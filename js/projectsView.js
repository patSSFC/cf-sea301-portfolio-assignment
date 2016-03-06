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

  $('#projects').on('click', function(e){
    var $eTarget= $(e.target);
    e.preventDefault();

    //fucking not working
    if ($eTarget.hasClass('read-on')) {
      $eTarget.parentsUntil('article').find('.project-body').children().show();
      $eTarget.hide();
    }
  });
};

projectView.navHover = function() {
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
