//Esperamso qeu sse cargue el contenido del documento
document.addEventListener('DOMContentLoaded', function () {
    //Se obtienen todos los parrafos del documento
    let parrafos = document.querySelectorAll('p');

    //Detecta uando se hace click en un parrafo
    parrafos.forEach(function (parrafo) {
        parrafo.addEventListener('click', function () {
            //Se muestra el mensaje cuando se presiona un parrafo
            alert('Se presionó un párrafo del documento');
        });
    });

    //Obtenemos la segunda tabla y sus parrafos
    let tabla2 = document.querySelector('table:nth-of-type(2)');
    let parrafosTabla2 = tabla2.querySelectorAll('p');

    //Insertamos un detector de eventos de click en cada parrafo de la segunda tabla
    parrafosTabla2.forEach(function (parrafo) {
        parrafo.addEventListener('click', function (event) {
            //Se muestra el mensaje cuando se presiona un parrafo de la segunda tabla
            alert('Se presionó un párrafo contenido en la segunda tabla');
        });
    });
});