function renderNotes() {
  let container = document.getElementById("notes-container");
  if (!container) return;

  container.innerHTML = "";

  notes.forEach(n => {
    container.innerHTML += `
      <div class="note-card">
        <h3>${n.title}</h3>
        <p>${n.category}</p>
        <a href="${n.link}">Download</a>
      </div>
    `;
  });
}

function addNote() {
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let link = document.getElementById("link").value;

  notes.push({title, category, link});
  alert("Added!");
}

function filter(cat) {
  let filtered = notes.filter(n => cat === "all" || n.category === cat);

  let container = document.getElementById("notes-container");
  container.innerHTML = "";

  filtered.forEach(n => {
    container.innerHTML += `<div class="note-card">${n.title}</div>`;
  });
}

renderNotes();
