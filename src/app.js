import { createRouter } from "./utils/router.js";

function HomeView(root){
  root.innerHTML = `
    <div class="card">
      <h1>Juniors3cOps Blog</h1>
      <p>Portafolio + blog de ciberseguridad (SOC, Pentesting, Networking).</p>
      <p>Usa el menú para ver <b>Proyectos</b> o <b>Blogs</b>.</p>
    </div>
  `;
}

function ProjectsView(root){
  root.innerHTML = `
    <div class="card">
      <h1>Proyectos</h1>
      <p>Aquí irán tus tarjetas de proyectos con tecnologías usadas.</p>
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
      <p>Luego crearemos el panel conectado a GitHub API.</p>
    </div>
  `;
}

createRouter({
  "/": HomeView,
  "/projects": ProjectsView,
  "/blogs": BlogsView,
  "/admin": AdminView,
  "/404": (root) => root.innerHTML = "<div class='card'><h1>404</h1><p>No existe.</p></div>"
});
