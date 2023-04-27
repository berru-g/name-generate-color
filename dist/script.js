const colors = {
  a: "#1d3557",
  b: "#457b9d",
  c: "#a8dadc",
  d: "#f1faee",
  e: "#e63946",
  f: "#a2d2ff",
  g: "#bde0fe",
  h: "#ffafcc",
  i: "#ffc8dd",
  j: "#cdb4db",
  k: "#9b2226",
  l: "#ae2012",
  m: "#bb3e03",
  n: "#ca6702",
  o: "#ee9b00",
  p: "#e9d8a6",
  q: "#f4a261",
  r: "#94d2bd",
  s: "#0a9396",
  t: "#005f73",
  u: "#001219",
  v: "#4cc9f0",
  w: "#4361ee",
  x: "#3a0ca3",
  y: "#7209b7",
  z: "#f72585",
};

const searchInput = document.getElementById("search");
const colorContainer = document.getElementById("color-container");

function displayColors() {
  colorContainer.innerHTML = ""; // efface les anciennes couleurs affichées
  const searchTerm = searchInput.value.toLowerCase(); // récupère la recherche et la convertit en minuscules
  const searchLength = searchTerm.length; // stocke la longueur de la recherche
  const widthPerColor = 100 / searchLength; // calcule la largeur de chaque couleur en fonction du nombre de lettres de la recherche
  let totalWidth = 0; // stocke la largeur totale des blocs de couleur
  for (let i = 0; i < searchLength; i++) {
    const letter = searchTerm.charAt(i);
    const color = colors[letter];
    if (color) {
      const colorBlock = document.createElement("div");
      colorBlock.className = "color-block";
      colorBlock.style.backgroundColor = color;
      colorBlock.style.width = `${widthPerColor}%`;
      colorContainer.appendChild(colorBlock);
      totalWidth += widthPerColor;
    }
  }
  // ajuste la largeur des blocs de couleur en fonction de la largeur totale
  const whiteSpace = 100 - totalWidth;
  colorContainer.childNodes.forEach((block, index) => {
    const lastBlock = index === searchLength - 1;
    const width = lastBlock ? `${widthPerColor + whiteSpace}%` : `${widthPerColor}%`;
    block.style.width = width;
  });
}

searchInput.addEventListener("input", displayColors);