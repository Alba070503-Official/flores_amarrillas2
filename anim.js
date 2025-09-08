// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con inicio y fin de cada línea
var lyricsData = [
  { text: "Él la estaba esperando", start: 18.13, end: 19.92 },
  { text: "Con una flor amarilla", start: 19.92, end: 23.16 },
  { text: "", start: 23.16, end: 25.72 },
  { text: "Ella lo estaba soñando", start: 25.72, end: 27.86 },
  { text: "Con la luz en su pupila", start: 27.86, end: 31.02 },
  { text: "", start: 31.02, end: 33.48 },
  { text: "Y el amarillo del sol", start: 33.48, end: 35.62 },
  { text: "Iluminaba la esquina", start: 35.62, end: 38.86 },
  { text: "", start: 38.86, end: 41.67 },
  { text: "Lo sentía tan cercano", start: 41.67, end: 43.64 },
  { text: "Lo sentía desde niña", start: 43.64, end: 47.23 },
  { text: "", start: 47.23, end: 47.56 },
  { text: "Ella sabía que él sabía", start: 47.56, end: 50.47 },
  { text: "Que algún día pasaría", start: 50.47, end: 52.52 },
  { text: "Que vendría él a buscarla", start: 52.52, end: 54.48 },
  { text: "Con sus flores amarillas", start: 54.48, end: 58.75 },
  { text: "", start: 58.75, end: 60.37 },
  { text: "No te apures, no detengas", start: 60.37, end: 62.25 },
  { text: "El instante del encuentro", start: 62.25, end: 64.29 },
  { text: "Está dicho que es un hecho", start: 64.29, end: 66.17 },
  { text: "No la pierdas no hay derecho", start: 66.17, end: 68.30 },
  { text: "No te olvides que la vida", start: 68.30, end: 72.15 },
  { text: "Casi nunca está dormida", start: 72.15, end: 76.49 },
  { text: "", start: 76.49, end: 94.49 },
  { text: "En ese bar tan desierto", start: 94.49, end: 96.62 },
  { text: "Nos esperaba el encuentro", start: 96.62, end: 99.79 },
  { text: "", start: 99.79, end: 102.43 },
  { text: "Ella llegó en limusina", start: 102.43, end: 104.48 },
  { text: "Amarilla por supuesto", start: 104.48, end: 107.64 },
  { text: "", start: 107.64, end: 110.20 },
  { text: "Él se acercó de repente", start: 110.20, end: 112.49 },
  { text: "La miró tan de frente", start: 112.49, end: 115.66 },
  { text: "", start: 115.66, end: 118.13 },
  { text: "Toda una vida soñada", start: 118.13, end: 120.35 },
  { text: "Y no pudo decir nada", start: 120.35, end: 123.85 },
  { text: "", start: 123.85, end: 124.19 },
  { text: "Ella sabía que él sabía", start: 124.19, end: 127.25 },
  { text: "Que algún día pasaría", start: 127.25, end: 129.31 },
  { text: "Que vendría él a buscarla", start: 129.31, end: 131.19 },
  { text: "Con sus flores amarillas", start: 131.19, end: 135.54 },
  { text: "", start: 135.54, end: 137.08 },
  { text: "No te apures, no detengas", start: 137.08, end: 138.95 },
  { text: "El instante del encuentro", start: 138.95, end: 141.00 },
  { text: "Está dicho que es un hecho", start: 141.00, end: 142.87 },
  { text: "No la pierdas no hay derecho", start: 142.87, end: 144.93 },
  { text: "No te olvides que la vida", start: 144.93, end: 148.93 },
  { text: "Casi nunca está dormida", start: 148.93, end: 153.37 },
  { text: "", start: 153.37, end: 161.14 },
  { text: "Flores amarillas", start: 161.14, end: 165.06 },
  { text: "", start: 165.06, end: 168.69 },
  { text: "Ella sabía que él sabía", start: 168.69, end: 172.42 },
  { text: "Que algún día pasaría", start: 172.42, end: 174.39 },
  { text: "Que vendría él a buscarla", start: 174.39, end: 176.43 },
  { text: "Con sus flores amarillas", start: 176.43, end: 180.61 },
  { text: "", start: 180.61, end: 182.31 },
  { text: "No te apures, no detengas", start: 182.31, end: 184.11 },
  { text: "El instante del encuentro", start: 184.11, end: 186.16 },
  { text: "Está dicho que es un hecho", start: 186.16, end: 188.13 },
  { text: "No la pierdas no hay derecho", start: 188.13, end: 190.17 },
  { text: "No te olvides que la vida", start: 190.17, end: 194.18 },
  { text: "Casi nunca está dormida", start: 194.18, end: 198.53 },
  { text: "", start: 198.53, end: 198.69 },
  { text: "Ella sabía que él sabía", start: 198.69, end: 202.15 },
  { text: "Él sabía, ella sabía", start: 202.15, end: 204.03 },
  { text: "Que él sabía, ella sabía", start: 204.03, end: 205.90 },
  { text: "Y se olvidaron de sus", start: 205.90, end: 208.52 },
  { text: "Flores amarillas", start: 208.52, end: 212.00 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time < line.end
  );

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// revisa cada 100 ms
setInterval(updateLyrics, 100);

//funcion titulo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}
setTimeout(ocultarTitulo, 216000);
