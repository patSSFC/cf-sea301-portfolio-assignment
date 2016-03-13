var projects = [];
var stackFilters = [];
var categroyFilters = [];

function Project(projData) {
  for (var data in projData) {
    if (projData.hasOwnProperty(data)) {
      this[data] = projData[data];
    }
  }
}

Project.prototype.toHtml = function () {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);

  if (stackFilters.indexOf(this.techStack) === -1) {
    stackFilters.push(this.techStack);
  }

  if (categroyFilters.indexOf(this.category) === -1) {
    categroyFilters.push(this.category);
  }

  return template(this);
};

projectData.forEach(function (projData) {
  projects.push(new Project(projData));
});

projects.forEach(function (project) {
  $('#projects').append(project.toHtml());
});

projectView.buildFilters();
