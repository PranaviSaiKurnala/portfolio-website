async function loadProjects() {

const projects = await getProjects();

const container =
document.getElementById("projectsContainer");

projects.forEach(project => {

container.innerHTML += `
<div class="card">

<h3>${project.title}</h3>

<p>${project.description}</p>

<a href="${project.github}">
GitHub
</a>

</div>
`;

});
}

loadProjects();