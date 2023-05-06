// Se ejecuta cuando el contenido de la pagina se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Obetenemos los elementos para el contenedor de miniaturas y el visor
    let miniaturas = document.querySelector(".miniaturas");
    let visor = document.querySelector(".visor");

    // Bucle for para crear las miniaturas de las 9 imagenes
    for (let i = 1; i <= 9; i++) {
        // Crea un nuevo elemento 'img' y asigna el 'src' y 'alt'
        let img = document.createElement("img");
        img.src = `./images/imagen${i}.jpg`;
        img.alt = `Imagen ${i}`;

        // Agrega un evento de 'click' al elemento 'img' que llama a la funcion 'mostrarImagen'
        img.addEventListener("click", () => {
            mostrarImagen(i);
        });

        // Agrega el elemento 'img' al contenedor de miniaturas
        miniaturas.appendChild(img);
    }

    // Funcion para mostrar una imagen en el visor con su pie de foto
    function mostrarImagen(index) {
        // Actualiza el contenido del visor con la imagen y el pie de foto correspondientes
        visor.innerHTML = `
          <img src="./images/imagen${index}.jpg" alt="Imagen ${index}">
          <p class="pie-de-foto">Imagen ${index}</p>
      `;
    }

    // Muestra la primera imagen al cargar la pagina
    mostrarImagen(1);
});