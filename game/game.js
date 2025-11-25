const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Definimos la posición de Santa
let santa = {
    x: 200,
    y: 110,
    w: 60,
    h: 32,
    speed: 5
};

// Variables de fondo
let snowflakes = [];

// Función para crear nieve
function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 1,
            speed: Math.random() * 3 + 1
        });
    }
}

// Función para dibujar la nieve
function drawSnowflakes() {
    ctx.fillStyle = "white";
    snowflakes.forEach(snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Función para actualizar la nieve (movimiento)
function updateSnowflakes() {
    snowflakes.forEach(snowflake => {
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
        }
    });
}

// Función para dibujar el fondo
function drawBackground() {
    // Fondo oscuro
    ctx.fillStyle = "#000814";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Función para dibujar a Santa (rectángulo rojo)
function drawSanta() {
    ctx.fillStyle = "red";
    ctx.fillRect(santa.x, santa.y, santa.w, santa.h);
}

// Función de actualización del juego
function update() {
    drawBackground();  // Dibuja el fondo
    drawSnowflakes();  // Dibuja la nieve
    drawSanta();       // Dibuja a Santa

    updateSnowflakes(); // Actualiza la nieve

    requestAnimationFrame(update);  // Continúa el ciclo del juego
}

// Mover a Santa con las teclas
let keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

// Función para mover a Santa
function moveSanta() {
    if (keys["ArrowUp"] || keys["KeyW"]) {
        santa.y -= santa.speed;
    }
    if (keys["ArrowDown"] || keys["KeyS"]) {
        santa.y += santa.speed;
    }
    if (keys["ArrowLeft"] || keys["KeyA"]) {
        santa.x -= santa.speed;
    }
    if (keys["ArrowRight"] || keys["KeyD"]) {
        santa.x += santa.speed;
    }

    // Limitar movimiento dentro de los bordes del canvas
    santa.x = Math.max(0, Math.min(canvas.width - santa.w, santa.x));
    santa.y = Math.max(0, Math.min(canvas.height - santa.h, santa.y));
}

// Llamamos a la función de movimiento y actualización
function loop() {
    moveSanta();
    update();
}

createSnowflakes();  // Crear la nieve
loop();              // Comienza el ciclo del juego
