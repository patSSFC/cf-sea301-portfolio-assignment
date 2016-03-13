var projectView = {};

// build filters
// handle filters
//
projectView.buildFilters = function () {

  var $filterSource = $('#filter-template').html();
  var filterTemplate = Handlebars.compile($filterSource);
  var context = {
    filters: [],
  };

  context.filters.push(projectView.buildFilterContext(stackFilters, 'stack-filter', 'Technology Stack'));
  context.filters.push(projectView.buildFilterContext(categroyFilters, 'category-filter', 'Category'));

  $('#filters').html(filterTemplate(context));

};

projectView.buildFilterContext = function (filterValues, type, blankValue) {
  var filter = {
    filterType: type,
    type: blankValue,
    values: [],
  };

  filterValues.forEach(function (value) {
    filter.values.push({
      value: value,
    });
  });

  return filter;

  // var f = {
  //     filters: [
  //       {
  //         filterType: 'author-filter',
  //         type: 'Author',
  //       },
  //       {
  //         filterType: 'category-filter',
  //         type: 'Category',
  //       },
  //     ],
  //   };
};

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
