
// Mostrar un mensaje en la consola

console.log("Bienvenido al taller mecanico");

// Crear una variable

let nombreTaller = "Taller Mecanico";

// Mostrar el nombre

console.log(nombreTaller);

// Crear una funcion

function saludar() {

    alert("Bienvenido a nuestro taller");

}

function contactarWhatsApp() {

    // Numero del taller
    let telefono = "5492211234567";

    // Mensaje automatico
    let mensaje = "Hola, quisiera consultar por un servicio mecanico.";

    // Crear enlace de WhatsApp
    let enlace = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    // Abrir WhatsApp
    window.open(enlace, "_blank");

}
