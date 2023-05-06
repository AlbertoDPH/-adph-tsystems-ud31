// Obtenemos todos los botones de la calculadora
const botones = document.querySelectorAll("button");

// Obtenemos la pantalla de la calculadora
const pantalla = document.getElementById("pantalla");

// Funcion para realizar las operaciones básicas
function realizarOperacion(valor1, valo2, operacion) {
    let resultado = 0;

    switch (operacion) {
        case "+":
            resultado = parseFloat(valor1) + parseFloat(valo2);
            break;
        case "-":
            resultado = parseFloat(valor1) - parseFloat(valo2);
            break;
        case "*":
            resultado = parseFloat(valor1) * parseFloat(valo2);
            break;
        case "/":
            resultado = parseFloat(valor1) / parseFloat(valo2);
            break;
        default:
            resultado = 0;
    }

    return resultado;
}

// Funcion para controlar los eventos de los botones
function eventosBoton(event) {
    const boton = event.target;

    if (!isNaN(boton.innerText)) {
        // Es numero
        if (pantalla.value === "0") {
            pantalla.value = boton.innerText;
        } else {
            pantalla.value += boton.innerText;
        }
    } else if (boton.innerText === "+" || boton.innerText === "-" || boton.innerText === "*" || boton.innerText === "/") {

        // Es una operacion basica
        if (pantalla.value !== "0") {
            pantalla.value += " " + boton.innerText + " ";
        }
    } else {
        switch (boton.innerText) {
            case "<":
                pantalla.value = pantalla.value.slice(0, -1);
                break;
            case "CE":
                pantalla.value = " DESHABILITADO ";
                break;
            case "C":
                pantalla.value = "0";
                break;
            case "√":
                pantalla.value = Math.sqrt(parseFloat(pantalla.value)).toString();
                break;
            case "%":
                pantalla.value = (parseFloat(pantalla.value) / 100).toString();
                break;
            case "1/x":
                pantalla.value = (1 / parseFloat(pantalla.value)).toString();
                break;
            case "+/-":
                pantalla.value = (-1 * parseFloat(pantalla.value)).toString();
                break;
            case ",":
                if (!pantalla.value.includes(".")) {
                    pantalla.value += ".";
                }
                break;
            case "=":
                let operandos = pantalla.value.split(" ");
                if (operandos.length === 3) {
                    let resultado = realizarOperacion(operandos[0], operandos[2], operandos[1]);
                    pantalla.value = resultado.toString();
                }
                break;
        }
    }
}

// Agrega el evento 'click' a todos los botones
botones.forEach((boton) => {
    boton.addEventListener("click", eventosBoton);
});

// Muestra '0' al cargar la pagina
pantalla.value = "0";