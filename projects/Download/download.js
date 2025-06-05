function toggleMenu() {
  const menu = document.getElementById("menu-idioma");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function mudarIdioma(idioma) {
  alert("Idioma alterado para: " + idioma.toUpperCase());
  // Aqui você pode integrar uma tradução real futuramente
}

// Oculta menu ao clicar fora
window.onclick = function (e) {
  const menu = document.getElementById("menu-idioma");
  if (!e.target.matches('.menu-hamburguer')) {
    menu.style.display = 'none';
  }
};
