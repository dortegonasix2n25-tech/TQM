// Función para hacer caer los corazones
document.getElementById("tree").addEventListener("click", function() {
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach(heart => {
        heart.classList.remove("moveHeart");
        heart.classList.add("fall");
    });

    // Mostrar mensaje después de que los corazones caigan
    setTimeout(() => {
        document.getElementById("message").innerHTML = "TU TEXTO AQUI";
        document.getElementById("message").style.display = "block";
    }, 3000);

    // Iniciar el contador
    setInterval(updateCounter, 1000);
});

// Contador de tiempo
function updateCounter() {
    const targetDate = new Date("2025-09-01T00:00:00Z");
    const now = new Date();
    const diff = targetDate - now;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("years").innerText = `Años: ${years}`;
    document.getElementById("months").innerText = `Meses: ${months}`;
    document.getElementById("days").innerText = `Días: ${days}`;
    document.getElementById("hours").innerText = `Horas: ${hours}`;
}
