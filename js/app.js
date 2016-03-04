var projects = [];
function Project(opts) {
  for (var o in opts) {
    if (opts.hasOwnProperty(o)) {
      this[o] = opts[o];
    }
  }
}

Project.prototype.toHtml = function () {
  $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h2').text(this.projName);
  $newProject.find('section.four.columns:first').html('<p>' + this.projDescription + '</p>');

  return $newProject;
};

projectData.forEach(function (projData) {
  projects.push(new Project(projData));
});

projects.forEach(function (project) {
  $('#projects').append(project.toHtml());
});
