var projectView = {};

var theme = {
  selectedTextColor: 'white-text',
  selectedBackground: 'purple',
  unselectedTextColor: 'purple-text',
  unselectedBackground: 'white',
};

projectView.selected = '';
projectView.handleNav = function () {
  $('.nav-links').on('click', function (event) {
    $('.tab-content').hide();
    $('.nav-links').removeClass('selected').addClass('unselected');
    $(this).toggleClass('selected unselected');
    $('#' + $(this).data('content')).fadeIn(500);
  });

  $('.nav-links:last').click();
};

projectView.setTeasers = function () {
  $('.project-body *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function (e) {
    e.preventDefault();
    if ($(this).hasClass('read-on')) {
      $(this).parentsUntil('article').find('.project-body').children().show();
      $(this).hide();
    }
  });
};

projectView.navHover = function () {
  //TODO -- apply / remove selected class so the selected button applies
  $('.nav-links').on('mouseover', function (e) {
    $evTarget = $(e.target);
    $(e.target).children().addClass('white-text purple');
    $(e.target).removeClass('purple-text unselected');

  });

  $('.nav-links').on('mouseleave', function (e) {
    $evTarget = $(e.target);
    $evTarget.children().addClass('purple-text');
    $evTarget.children().removeClass('white-text purple');
  });
};

projectView.handleNav();
projectView.setTeasers();
projectView.navHover();
