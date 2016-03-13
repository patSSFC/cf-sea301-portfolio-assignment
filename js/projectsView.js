var projectView = {};

projectView.buildFilters = function () {
  var context = { filters: [] };
  var $filterSource = $('#filter-template').html();
  var filterTemplate = Handlebars.compile($filterSource);

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
    filter.values.push({ option: value });
  });

  return filter;
};

projectView.handleStackFilter = function () {
  $('#stack-filter').on('change', function () {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-tech-stack="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
    }

    $('#category-filter').val('');
  });
};

projectView.handleCategoryFilter = function () {
  $('#category-filter').on('change', function () {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
    }

    $('#stack-filter').val('');
  });
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

$(document).ready(function () {
  projectView.handleNav();
  projectView.setTeasers();
  projectView.handleStackFilter();
  projectView.handleCategoryFilter();
});
