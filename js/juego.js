/* ═══ CAZAMITOS · lógica del juego ═══ */

const RONDA    = 10;   // preguntas por partida (se sortean del banco)
const SEGUNDOS = 20;   // tiempo por pregunta
const BASE     = 100;  // puntos por acierto
const BONUS    = 100;  // puntos extra máximos por responder rápido

const app = document.getElementById("app");
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g,
  c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

let mazo = [], i = 0, puntos = 0, aciertos = 0, racha = 0, mejorRacha = 0;
let fallos = [], reloj = null, queda = 0, sonidoOn = true;

/* ─── Sonido (sin archivos: se genera en el navegador) ─── */
let ctx;
function tono(frec, dur, tipo) {
  if (!sonidoOn) return;
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = tipo || "sine"; o.frequency.value = frec;
    g.gain.setValueAtTime(.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + dur);
  } catch (e) { /* si el navegador no deja, el juego sigue igual */ }
}
const suenaBien  = () => { tono(660, .12); setTimeout(() => tono(880, .18), 110); };
const suenaMal   = () => tono(170, .3, "square");
const suenaClick = () => tono(440, .05, "triangle");

/* ─── Récord guardado en el navegador ─── */
function leerRecord() {
  try { return parseInt(localStorage.getItem("cazamitos_record") || "0", 10) || 0; }
  catch (e) { return 0; }
}
function guardarRecord(p) {
  try { if (p > leerRecord()) { localStorage.setItem("cazamitos_record", p); return true; } }
  catch (e) { }
  return false;
}

/* ─── Pantalla de inicio ─── */
function inicio() {
  clearInterval(reloj);
  const r = leerRecord();
  app.innerHTML = `
  <div class="tarjeta inicio">
    <h2 class="titulazo">Cazamitos</h2>
    <p class="bajada">Cada ronda son ${RONDA} preguntas sorteadas de un banco de ${PREGUNTAS.length}.
      Mientras más rápido respondes, más puntos ganas. Encadena aciertos y el puntaje se multiplica.</p>
    <div class="reglas">
      <div class="regla"><b>${SEGUNDOS}s</b><span>por pregunta</span></div>
      <div class="regla"><b>×3</b><span>multiplicador máximo</span></div>
      <div class="regla"><b>${RONDA}</b><span>preguntas por ronda</span></div>
    </div>
    <button class="boton" id="jugar">Empezar a cazar</button>
    ${r ? `<p class="record">Tu mejor puntaje: <b>${r}</b></p>` : ""}
  </div>`;
  document.getElementById("jugar").onclick = partir;
}

/* ─── Arranque de partida ─── */
function partir() {
  suenaClick();
  mazo = PREGUNTAS.slice().sort(() => Math.random() - .5).slice(0, RONDA);
  i = 0; puntos = 0; aciertos = 0; racha = 0; mejorRacha = 0; fallos = [];
  pregunta();
}

function multiplicador() {
  return racha >= 6 ? 3 : racha >= 4 ? 2 : racha >= 2 ? 1.5 : 1;
}

/* ─── Una pregunta ─── */
function pregunta() {
  const p = mazo[i];
  const letras = ["A", "B", "C"];
  app.innerHTML = `
  <div class="tarjeta">
    <div class="marcador">
      <div class="dato">Puntaje<b id="pts">${puntos}</b></div>
      <div class="racha ${racha >= 2 ? "viva" : ""}" id="racha">🔥 Racha ${racha} · ×${multiplicador()}</div>
      <div class="dato" style="text-align:right">Aciertos<b>${aciertos}/${RONDA}</b></div>
    </div>
    <div class="tiempo" id="barra"><i id="jugo"></i></div>
    <div class="avance"><span>Pregunta ${i + 1} de ${RONDA}</span><span id="seg">${SEGUNDOS}s</span></div>
    <div class="tema">${esc(p.tema)}</div>
    <p class="enunciado">${esc(p.pregunta)}</p>
    <div id="alts">
      ${p.alternativas.map((a, n) =>
        `<button class="alt" data-n="${n + 1}"><span class="letra">${letras[n]}</span><span>${esc(a)}</span></button>`
      ).join("")}
    </div>
    <div id="hueco"></div>
  </div>`;

  [].forEach.call(document.querySelectorAll(".alt"), b => {
    b.onclick = () => responder(parseInt(b.dataset.n, 10));
  });

  queda = SEGUNDOS * 10;
  clearInterval(reloj);
  reloj = setInterval(() => {
    queda--;
    const pc = queda / (SEGUNDOS * 10) * 100;
    document.getElementById("jugo").style.width = pc + "%";
    document.getElementById("seg").textContent = Math.ceil(queda / 10) + "s";
    if (pc < 30) document.getElementById("barra").classList.add("poco");
    if (queda <= 0) responder(0);
  }, 100);
}

/* ─── Respuesta ─── */
function responder(n) {
  clearInterval(reloj);
  const p = mazo[i], bien = n === p.correcta;
  let ganados = 0;

  if (bien) {
    const rapidez = Math.round(BONUS * (queda / (SEGUNDOS * 10)));
    racha++;
    mejorRacha = Math.max(mejorRacha, racha);
    ganados = Math.round((BASE + rapidez) * multiplicador());
    puntos += ganados; aciertos++;
    suenaBien();
  } else {
    racha = 0;
    fallos.push(p);
    suenaMal();
  }

  [].forEach.call(document.querySelectorAll(".alt"), b => {
    b.disabled = true;
    const v = parseInt(b.dataset.n, 10);
    if (v === p.correcta) b.classList.add("buena");
    else if (v === n) b.classList.add("mala");
  });

  const titulo = n === 0 ? "Se acabó el tiempo." : bien ? "¡Correcto!" : "No era esa.";
  document.getElementById("hueco").innerHTML = `
    <div class="explica">
      ${ganados ? `<span class="puntos">+${ganados}</span>` : ""}
      <b>${titulo}</b>${esc(p.explicacion)}
    </div>
    <button class="boton ancho" id="sigue">${i < RONDA - 1 ? "Siguiente pregunta" : "Ver mi resultado"}</button>`;

  document.getElementById("pts").textContent = puntos;
  const rr = document.getElementById("racha");
  rr.textContent = `🔥 Racha ${racha} · ×${multiplicador()}`;
  rr.className = "racha" + (racha >= 2 ? " viva sube" : "");

  document.getElementById("sigue").onclick = () => {
    suenaClick();
    i++;
    i < RONDA ? pregunta() : final();
  };
}

/* ─── Resultado ─── */
function final() {
  const prop = aciertos / RONDA;
  const rango = prop === 1 ? "Cazamitos profesional"
              : prop >= .8 ? "Ojo entrenado"
              : prop >= .5 ? "Vas cazando"
              : "Te quedó debiendo";
  const frase = prop === 1 ? "No se te escapó ninguno. Ya puedes explicarle esto a cualquiera."
              : prop >= .8 ? "Reconociste casi todos los mitos que circulan todos los días."
              : prop >= .5 ? "Vas por buen camino. Date otra vuelta y mejora el puntaje."
              : "Varios de estos mitos engañan a mucha gente. Revisa las respuestas y vuelve a intentarlo.";
  const nuevo = guardarRecord(puntos);

  app.innerHTML = `
  <div class="tarjeta final">
    <div class="cifra">${puntos}</div>
    <div class="rango">${rango}</div>
    <p>${frase}</p>
    <div class="resumen">
      <div class="regla"><b>${aciertos}/${RONDA}</b><span>aciertos</span></div>
      <div class="regla"><b>🔥 ${mejorRacha}</b><span>mejor racha</span></div>
      <div class="regla"><b>${leerRecord()}</b><span>tu récord</span></div>
    </div>
    ${nuevo ? `<div class="nuevo">¡Nuevo récord!</div>` : ""}
    <button class="boton ancho" id="otra">Jugar otra ronda</button>
    <button class="boton fantasma ancho" id="menu">Volver al inicio</button>
    ${fallos.length ? `
    <div class="repaso">
      <h3>Para repasar</h3>
      ${fallos.map(f => `
        <div class="fallo">
          <b>${esc(f.pregunta)}</b>
          <p class="correcta">${esc(f.alternativas[f.correcta - 1])}</p>
          <p>${esc(f.explicacion)}</p>
        </div>`).join("")}
    </div>` : ""}
  </div>`;

  document.getElementById("otra").onclick = partir;
  document.getElementById("menu").onclick = inicio;
}

/* ─── Botón de sonido ─── */
document.getElementById("sonido").onclick = function () {
  sonidoOn = !sonidoOn;
  this.textContent = sonidoOn ? "🔊" : "🔇";
  this.setAttribute("aria-label", sonidoOn ? "Silenciar" : "Activar sonido");
  if (sonidoOn) suenaClick();
};

inicio();
