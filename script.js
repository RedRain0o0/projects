function getModrinth() {
  console.log("Attempting to fetch Modrinth projects...");
  const url = "https://api.modrinth.com/v2/user/redrain0o0/projects";
  const projectsSpan = document.getElementById('projectsSpan');
  fetch(url)
  .then(function(response) {
    response.json().then(function(projects){
      projects.forEach(function(project){
        console.log("Project %s (%s) has %s downloads and %s follows", project.title, project.slug, project.downloads, project.followers);
        //projectsSpan.appendChild(document.createTextNode(project.title));

        container = document.createElement("div")

        container.classList = "projectModrinth";
        container.id = project.slug + "Project"

        icon = document.createElement("img");
        icon.src = project.icon_url;
        icon.classList = "projectIcon"
        container.appendChild(icon);

        link = document.createElement("a");
        link.classList = "projectName";
        link.innerText = project.title
        link.href = "https://modrinth.com/" + project.project_type + "/" + project.slug;
        container.appendChild(link);

        desc = document.createElement("p");
        desc.innerText = project.description;
        desc.classList = "projectDescription"
        container.appendChild(desc)

        projectsSpan.appendChild(container);

        /*<div id="testProject" class="projectModrinth">
          <img class="projectIcon" src="https://avatars.githubusercontent.com/u/96890698?v=4">
          <a class="projectName" href="https://modrinth.com/user/RedRain0o0">Test Project</a>
          <p class="projectDescription">This is a short description for this test project!</p>
        </div>*/
      });
    });
  }).catch(err => console.error(err));
}