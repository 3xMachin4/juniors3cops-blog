import { fetchJSON } from "../utils/data.js";
import { CardProject } from "../components/CardProject.js";

export async function ProjectsView(root) {
  root.innerHTML = `
    <div class="card">
      <h1>Proyectos</h1>
      <p>Selecciona un proyecto para ver la guía.</p>
    </div>
    <section id="projectsGrid" class="grid"></section>
  `;

  const grid = root.querySelector("#projectsGrid");

  try {
    const projects = await fetchJSON("src/data/projects.json");

    if (!projects.length) {
      grid.innerHTML = `<div class="card"><p>No hay proyectos todavía.</p></div>`;
      return;
    }

    projects.forEach(prj => grid.appendChild(CardProject(prj)));
  } catch (err) {
    grid.innerHTML = `
      <div class="card">
        <h3>Error cargando proyectos</h3>
        <p>${err.message}</p>
      </div>
    `;
  }
}
