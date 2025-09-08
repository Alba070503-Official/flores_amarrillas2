// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando", time: 18.13 },
  { text: "Con una flor amarilla", time: 19.92 },
  { text: "", time: 23.16 },
  { text: "Ella lo estaba soñando", time: 25.72 },
  { text: "Con la luz en su pupila", time: 27.86 },
  { text: "", time: 31.02 },
  { text: "Y el amarillo del sol", time: 33.48 },
  { text: "Iluminaba la esquina", time: 35.62 },
  { text: "", time: 38.86 },
  { text: "Lo sentía tan cercano", time: 41.67 },
  { text: "Lo sentía desde niña", time: 43.64 },
  { text: "", time: 47.23 },
  { text: "Ella sabía que él sabía", time: 46.50 },
  { text: "Que algún día pasaría", time: 50.00 },
  { text: "Que vendría él a buscarla", time: 52.52 },
  { text: "Con sus flores amarillas", time: 54.48 },
  { text: "", time: 58.75 },
  { text: "No te apures, no detengas", time: 60.37 },
  { text: "El instante del encuentro", time: 62.25 },
  { text: "Está dicho que es un hecho", time: 64.29 },
  { text: "No la pierdas no hay derecho", time: 66.17 },
  { text: "No te olvides que la vida", time: 68.30 },
  { text: "Casi nunca está dormida", time: 72.15 },
  { text: "", time: 76.49 },
  { text: "En ese bar tan desierto", time: 94.49 },
  { text: "Nos esperaba el encuentro", time: 96.62 },
  { text: "", time: 99.79 },
  { text: "Ella llegó en limusina", time: 102.43 },
  { text: "Amarilla por supuesto", time: 104.48 },
  { text: "", time: 107.64 },
  { text: "Él se acercó de repente", time: 110.20 },
  { text: "La miró tan de frente", time: 112.49 },
  { text: "", time: 115.66 },
  { text: "Toda una vida soñada", time: 118.13 },
  { text: "Y no pudo decir nada", time: 120.35 },
  { text: "", time: 123.85 },
  { text: "Ella sabía que él sabía", time: 124.19 },
  { text: "Que algún día pasaría", time: 127.25 },
  { text: "Que vendría él a buscarla", time: 129.31 },
  { text: "Con sus flores amarillas", time: 131.19 },
  { text: "", time: 135.54 },
  { text: "No te apures, no detengas", time: 137.08 },
  { text: "El instante del encuentro", time: 138.95 },
  { text: "Está dicho que es un hecho", time: 141.00 },
  { text: "No la pierdas no hay derecho", time: 142.87 },
  { text: "No te olvides que la vida", time: 144.93 },
  { text: "Casi nunca está dormida", time: 148.93 },
  { text: "", time: 153.37 },
  { text: "Flores amarillas", time: 161.14 },
  { text: "", time: 165.06 },
  { text: "Ella sabía que él sabía", time: 168.69 },
  { text: "Que algún día pasaría", time: 172.42 },
  { text: "Que vendría él a buscarla", time: 174.39 },
  { text: "Con sus flores amarillas", time: 176.43 },
  { text: "", time: 180.61 },
  { text: "No te apures, no detengas", time: 182.31 },
  { text: "El instante del encuentro", time: 184.11 },
  { text: "Está dicho que es un hecho", time: 186.16 },
  { text: "No la pierdas no hay derecho", time: 188.13 },
  { text: "No te olvides que la vida", time: 190.17 },
  { text: "Casi nunca está dormida", time: 194.18 },
  { text: "", time: 198.53 },
  { text: "Ella sabía que él sabía", time: 198.04 },
  { text: "Él sabía, ella sabía", time: 202.15 },
  { text: "Que él sabía, ella sabía", time: 204.03 },
  { text: "Y se olvidaron de sus", time: 205.90 },
  { text: "Flores amarillas", time: 208.52 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // ahora usamos decimales
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 2.8
  );

  if (currentLine) {
    var fadeInDuration = 0.1; // medio segundo de aparición
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// más preciso: revisa cada 100 ms
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
