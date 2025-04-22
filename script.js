function getModrinth() {
  console.log("Attempting to fetch Modrinth projects...");
  const url = "https://api.modrinth.com/v2/user/redrain0o0/projects";
  const projectsDiv = document.getElementById('projects');
  fetch(url)
  .then(function(response) {
    response.json().then(function(projects){
      projects.forEach(function(project){
        console.log("Project %s (%s) has %s downloads and %s follows", project.title, project.slug, project.downloads, project.followers);
        //projectsDiv.appendChild(document.createTextNode(project.title));
      });
    });
  }).catch(err => console.error(err));
}