var projectView = {};

// build filters
// handle filters
projectView.handleNav = function () {
  $('.nav-links').on('click', 'a', function (event) {
    $('.tab-content').hide();
    $('.nav-links .is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    console.log('#' + $(this).data('content'));
    $('#' + $(this).data('content')).fadeIn(500);
  });

  $('a.nav-links:first').click();
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

projectView.handleNav();
projectView.setTeasers();
