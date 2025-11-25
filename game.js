/* ============================================================================================
   CONFIGURACIÓ GENERAL DEL JOC
   ============================================================================================ */

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const pauseBtn = document.getElementById("pauseBtn");

/* Possibles estats del joc */
let estat = "start"; // "start", "playing", "paused", "gameover"

/* Variables principals del joc */
let punts, vides, santa, regals, cases, ocells, efectes;

/* Constants per a xemeneies */
const xemeneiaWBase = 25;
const xemeneiaHBase = 25;

/* Número de cases simultànies */
const numCases = 5;

/* Velocitat del mapa */
let velocitatCasesBase = 3;
let velocitatCases;

/* Comptadors */
let encerts;
let combo = 0;
let millorCombo = 0;

/* Elements de decoració */
let estrelles = [];
let flocsNeu = [];
let skyline = [];

/* ============================================================================================
   FUNCIÓ PER REINICIAR TOT EL JOC
   ============================================================================================ */
function resetGame() {
    punts = 0;
    vides = 5;                 // Vides del jugador
    santa = {                 // Posició i mida del Pare Noel
        x: 200,
        y: 110,
        w: 60,
        h: 32,
        speed: 5,
        angle: 0
    };
    regals = [];              // Llista de regals
    cases = [];               // Llista de cases
    ocells = [];              // Llista d'ocells enemics
    efectes = [];             // Efectes visuals d'encerts
    velocitatCases = velocitatCasesBase;
    encerts = 0;
    combo = 0;
    millorCombo = 0;

    generaCasesInicials();    // Genera les primeres cases
    generaEstrelles();        // Genera el cel
    generaNeu();              // Genera els flocs de neu
    generaSkyline();          // Genera els edificis del fons

    document.getElementById("score").innerText = "Punts: " + punts;
}
resetGame();

/* Actualitza el text del botó de pausa segons l’estat del joc */
function actualitzaTextBoto() {
    if (estat === "playing") pauseBtn.textContent = "Pausa";
    else if (estat === "paused") pauseBtn.textContent = "Reprendre";
    else pauseBtn.textContent = "Pausa";
}

/* Resto del código (el mismo que ya tienes) */

/* ============================================================================================
   LOOP PRINCIPAL DEL JOC
   ============================================================================================ */

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}
loop();

/* ============================================================================================
   FINAL DEL SCRIPT
   ============================================================================================ */
