export async function ProjectDetailView(root, params) {
  root.innerHTML = `
    <div class="card">
      <h1>Proyecto: ${params.id}</h1>
      <p>Ahora mismo esto es un placeholder. Luego aquí cargaremos la guía en Markdown del proyecto.</p>
      <p><a href="#/projects">← Volver</a></p>
    </div>
  `;
}
