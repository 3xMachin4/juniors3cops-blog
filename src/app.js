import { createRouter } from "./utils/router.js";
import { ProjectsView } from "./views/ProjectsView.js";
import { ProjectDetailView } from "./views/ProjectDetailView.js";

function HomeView(root){
  root.innerHTML = `
    <div class="card">
      <h1>Juniors3cOps Blog</h1>
      <p>Portafolio + blog de ciberseguridad (SOC, Pentesting, Networking).</p>
      <p>Usa el menú para ver <b>Proyectos</b> o <b>Blogs</b>.</p>
    </div>
  `;
}

function BlogsView(root){
  root.innerHTML = `
    <div class="card">
      <h1>Blogs</h1>
      <p>Aquí irán tus posts tipo dev.to con tags, buscador y filtros.</p>
    </div>
  `;
}

function AdminView(root){
  root.innerHTML = `
    <div class="card">
      <h1>Admin</h1>
      <p>Aquí irá el panel conectado a GitHub API (crear/editar/eliminar).</p>
    </div>
  `;
}

createRouter({
  "/": HomeView,
  "/projects": ProjectsView,
  "/projects/:id": ProjectDetailView,
  "/blogs": BlogsView,
  "/admin": AdminView,
  "/404": (root) => root.innerHTML = "<div class='card'><h1>404</h1><p>No existe.</p></div>"
});
