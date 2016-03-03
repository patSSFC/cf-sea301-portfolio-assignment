var projects = [];
function Project(opts){
  // projects will go here
}

Project.prototype.toHtml = function () {
  // format projects here
};

projectData.forEach(function (projData){
  projects.push(new Project(projData));
});

projects.forEach(function(project){
  $('projects').append(project.toHtml());
});
