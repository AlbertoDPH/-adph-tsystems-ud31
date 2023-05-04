//Validar fecha en formato "XX/XX/XXXX"
let fechaFormato = /\d{2}\/\d{2}\/\d{4}/;
let texto = "Naci el 05/04/1982 en Donostia.";
let fechaEncontrada = texto.match(fechaFormato);
console.log("Fecha encontrada:", fechaEncontrada);

//Validar dirección de email
let emailFormato = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
let email = "alberto@tuemail.com";
let emailValido = emailFormato.test(email);
console.log("Email valido:", emailValido);

//Reemplazo de caracteres con expresiones regulares
function escapeHTML(text) {
    let replacements = [
        [/&/g, "&amp;"],
        [/"/g, "&quot;"],
        [/<\//g, "&lt;"],
        [/>/g, "&gt;"]
    ];

    replacements.forEach(function (replace) {
        text = text.replace(replace[0], replace[1]);
    });

    return text;
}

let htmlTexto = '<p>Hola "Alberto"</p>';
console.log("Texto resultado:", escapeHTML(htmlTexto));

//Mostrar nombre y apellido en orden inverso
let nombre = "John Smith";
let nombreFormato = /(\w+)\s(\w+)/;
let nombreInverso = nombre.replace(nombreFormato, "$2, $1");
console.log("Nombre inverso:", nombreInverso);

//Eliminar etiquetas <script> peligrosaso
let htmlPeligro = "<p>Puede que fuera un</p><script>alert('ataque');</script><p>maxivo</p>";
let scriptRegex = /<script[\s\S]*?<\/script>/g;
let htmlFiltro = htmlPeligro.replace(scriptRegex, "");
console.log("HTML con filtro:", htmlFiltro);