export function createRouter(routes) {
  const app = document.getElementById("app");

  function render() {
    const hash = location.hash || "#/";
    const path = hash.replace("#", "");

    const route = routes[path] || routes["/404"];
    if (!route) {
      app.innerHTML = "<div class='card'><h1>404</h1><p>Ruta no encontrada.</p></div>";
      return;
    }

    app.innerHTML = "";
    route(app);
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("load", render);

  return { render };
}
