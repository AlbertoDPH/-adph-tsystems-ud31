// Funcion que devuelve un numero aleatorio entre 1 y 6
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funcion para simular el lanzamiento de dos dados 360 veces
function simularLanzamientos() {
    let resultados = new Array(13).fill(0); // Inicializa el array de resultados con 0

    for (let i = 0; i < 36000; i++) {
        let dado1 = lanzarDado();
        let dado2 = lanzarDado();
        let suma = dado1 + dado2;

        resultados[suma]++; // Incrementa el contador de apariciones de la suma
    }

    return resultados;
}

// Llama a la funcion simularLanzamientos y guarda el array de resultados
let resultadosLanzamientos = simularLanzamientos();

// Muestra los resultados en la consola
for (let i = 2; i < resultadosLanzamientos.length; i++) {
    console.log(`La suma ${i} ha aparecido ${resultadosLanzamientos[i]} veces.`);
}