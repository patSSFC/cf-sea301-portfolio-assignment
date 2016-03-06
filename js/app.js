var projects = [];
function Project(projData) {
  for (var data in projData) {
    if (projData.hasOwnProperty(data)) {
      this[data] = projData[data];
    }
  }
}

Project.prototype.toHtml = function () {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h2').text(this.projName);
  $newProject.find('.project-body').html(this.projDescription);
  return $newProject;
};

projectData.forEach(function (projData) {
  projects.push(new Project(projData));
});

projects.forEach(function (project) {
  $('#projects').append(project.toHtml());
});
