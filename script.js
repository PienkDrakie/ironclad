/**
 * Renders the PEOPLE array (people.js) into the credits grid.
 */

const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  portfolio: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/></svg>`,
};

function normalizeInstagramUrl(value) {
  if (/^https?:\/\//i.test(value)) return value;
  const handle = value.replace(/^@/, "").trim();
  return `https://instagram.com/${handle}`;
}

function normalizePortfolioUrl(value) {
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
}

function makeLinkRow(iconKey, href, label) {
  const a = document.createElement("a");
  a.className = "card-link";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.innerHTML = ICONS[iconKey];
  const span = document.createElement("span");
  span.textContent = label;
  a.appendChild(span);
  return a;
}

function renderCard(person) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <svg class="corner-ornament tl"><use href="#corner-ornament"/></svg>
    <svg class="corner-ornament tr"><use href="#corner-ornament"/></svg>
    <svg class="corner-ornament bl"><use href="#corner-ornament"/></svg>
    <svg class="corner-ornament br"><use href="#corner-ornament"/></svg>
  `;

  const name = document.createElement("h3");
  name.className = "card-name";
  name.textContent = person.name;
  card.appendChild(name);

  if (person.role) {
    const role = document.createElement("p");
    role.className = "card-role";
    role.textContent = person.role;
    card.appendChild(role);
  }

  const links = document.createElement("div");
  links.className = "card-links";

  if (person.instagram) {
    links.appendChild(
      makeLinkRow("instagram", normalizeInstagramUrl(person.instagram), person.instagram)
    );
  }
  if (person.email) {
    links.appendChild(makeLinkRow("email", `mailto:${person.email}`, person.email));
  }
  if (person.portfolio) {
    const display = person.portfolio.replace(/^https?:\/\//i, "");
    links.appendChild(
      makeLinkRow("portfolio", normalizePortfolioUrl(person.portfolio), display)
    );
  }

  if (links.children.length > 0) {
    card.appendChild(links);
  } else {
    const note = document.createElement("p");
    note.className = "card-empty-note";
    note.textContent = "More details coming soon.";
    card.appendChild(note);
  }

  return card;
}

function render() {
  const grid = document.getElementById("credits-grid");
  PEOPLE.forEach((person) => grid.appendChild(renderCard(person)));

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

render();
