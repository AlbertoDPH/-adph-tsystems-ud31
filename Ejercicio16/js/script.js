function actualizarReloj() {
    // Fecha y hora actual del ordenador
    let fecha = new Date(); 
    // Guardamos la hora
    let hora = fecha.getHours();
    // Guardamos los minutos
    let minutos = fecha.getMinutes();
    // Guardamos los segundos
    let segundos = fecha.getSeconds();

    // Insertamos un cero a la izquierda si la hora, minutos o segundos son menores a 10
    hora = (hora < 10) ? "0" + hora : hora;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    // Actualiza los elementos HTML con la hora, minutos y segundos
    document.getElementById("hora").textContent = hora;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Establece un temporizador para actualizar el reloj cada segundo
    setTimeout(actualizarReloj, 1000);
}

// Inicia el reloj al cargar la página
document.addEventListener("DOMContentLoaded", actualizarReloj);
