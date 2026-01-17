import { TagBadge } from "./TagBadge.js";

export function CardProject(project) {
  const a = document.createElement("a");
  a.className = "card project-card";
  a.href = `#/projects/${project.id}`;

  const h3 = document.createElement("h3");
  h3.textContent = project.title;

  const p = document.createElement("p");
  p.textContent = project.summary || "";

  const techRow = document.createElement("div");
  techRow.className = "badges";

  (project.tech || []).forEach(t => techRow.appendChild(TagBadge(t)));

  a.appendChild(h3);
  a.appendChild(p);
  a.appendChild(techRow);

  return a;
}
