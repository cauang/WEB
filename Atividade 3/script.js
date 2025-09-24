// Carregar jogos salvos
document.addEventListener("DOMContentLoaded", loadGames);

function addGame() {
    const input = document.getElementById("gameInput");
    const gameName = input.value.trim();
    if (gameName === "") return;

    addGameToList(gameName);
    saveGame(gameName, false);
    input.value = "";
}

function addGameToList(name, completed = false) {
    const ul = document.getElementById("gameList");
    const li = document.createElement("li");
    li.textContent = name;

    if (completed) li.classList.add("completed");

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateGame(name, li.classList.contains("completed"));
    });

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.classList.add("delete-btn");
    btn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        deleteGame(name);
    };

    li.appendChild(btn);
    ul.appendChild(li);
}

// --- LocalStorage ---
function saveGame(name, completed) {
    let games = JSON.parse(localStorage.getItem("games")) || [];
    games.push({ name, completed });
    localStorage.setItem("games", JSON.stringify(games));
}

function loadGames() {
    let games = JSON.parse(localStorage.getItem("games")) || [];
    games.forEach(g => addGameToList(g.name, g.completed));
}

function updateGame(name, completed) {
    let games = JSON.parse(localStorage.getItem("games")) || [];
    games = games.map(g => g.name === name ? { name, completed } : g);
    localStorage.setItem("games", JSON.stringify(games));
}

function deleteGame(name) {
    let games = JSON.parse(localStorage.getItem("games")) || [];
    games = games.filter(g => g.name !== name);
    localStorage.setItem("games", JSON.stringify(games));
}
