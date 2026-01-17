function matchRoute(pattern, path) {
  const pParts = pattern.split("/").filter(Boolean);
  const aParts = path.split("/").filter(Boolean);

  if (pParts.length !== aParts.length) return null;

  const params = {};
  for (let i = 0; i < pParts.length; i++) {
    const p = pParts[i];
    const a = aParts[i];

    if (p.startsWith(":")) {
      params[p.slice(1)] = decodeURIComponent(a);
      continue;
    }
    if (p !== a) return null;
  }
  return params;
}

export function createRouter(routes) {
  const app = document.getElementById("app");

  function resolve(path) {
    if (routes[path]) return { handler: routes[path], params: {} };

    for (const pattern of Object.keys(routes)) {
      if (!pattern.includes(":")) continue;
      const params = matchRoute(pattern, path);
      if (params) return { handler: routes[pattern], params };
    }
    return { handler: routes["/404"], params: {} };
  }

  async function render() {
    const hash = location.hash || "#/";
    const path = hash.replace("#", "");

    const { handler, params } = resolve(path);

    app.innerHTML = "";
    if (!handler) {
      app.innerHTML = "<div class='card'><h1>404</h1><p>Ruta no encontrada.</p></div>";
      return;
    }
    await handler(app, params);
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("load", render);

  return { render };
}
